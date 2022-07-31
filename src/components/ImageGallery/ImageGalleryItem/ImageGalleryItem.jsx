import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ smallImg, largeImg, handleOpenModal }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItemImage}
        src={smallImg}
        alt="lol"
        onClick={() => handleOpenModal(largeImg)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};
