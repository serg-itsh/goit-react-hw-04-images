import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleButton);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleButton);
  }

  handleButton = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styles.Overlay} onClick={this.handleBackdrop}>
        <div className={styles.Modal}>
          <img src={this.props.image} alt="img" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
