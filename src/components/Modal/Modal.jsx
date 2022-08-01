import PropTypes from 'prop-types';
// import { Component } from 'react';
import { useEffect } from 'react';
import styles from './Modal.module.css';

export const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const handleButton = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleButton);

    return () => {
      window.removeEventListener('keydown', handleButton);
    };
  });

  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.Overlay} onClick={handleBackdrop}>
      <div className={styles.Modal}>
        <img src={image} alt="img" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
