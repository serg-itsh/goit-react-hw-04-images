import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import SearchApi from 'components/Searchbar/SearchApi';
import { Button } from 'components/Button/Button';
import styles from './ImageGallery.module.css';
import { Loader } from '../Loader/Loader';

const STATUS = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error',
};

export class ImageGallery extends Component {
  state = {
    gallery: [],
    totalHits: null,
    page: 1,
    status: STATUS.idle,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.setState({ status: STATUS.loading });
      SearchApi(this.props.query)
        .then(result => {
          const { data } = result;
          if (data.hits.length === 0) {
            alert('You enter invalid search request');
          }
          this.setState(prevState => ({
            gallery: [...data.hits],
            page: 2,
            totalHits: data.totalHits,
            status: STATUS.success,
          }));
        })
        .catch(error => {
          this.setState({ status: STATUS.error, error });
        });
    }
  }

  handleLoader = () => {
    SearchApi(this.props.query, this.state.page)
      .then(res => {
        const { hits } = res.data;
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => {
        this.setState({ status: STATUS.error, error });
      });
  };

  render() {
    const { gallery, totalHits, page, status, error } = this.state;
    if (status === STATUS.loading) {
      return <Loader />;
    }
    if (status === STATUS.error) {
      return <p>{error}</p>;
    }

    return (
      <>
        <ul className={styles.ImageGallery}>
          {gallery.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                smallImg={webformatURL}
                largeImg={largeImageURL}
                handleOpenModal={this.props.handleOpenModal}
              />
            );
          })}
        </ul>
        {totalHits >= 12 * page && <Button onClick={this.handleLoader} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
