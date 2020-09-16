import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

export default function GalleryItemRender({
  id,
  pageURL,
  webformatURL,
  largeImageURL,
  onOpenModal,
}) {
  const showLargeImg = () => onOpenModal(largeImageURL);
  return (
    <li className={styles.ImageGalleryItem} onClick={showLargeImg}>
      <img
        src={webformatURL}
        alt={pageURL}
        className={styles.ImageGalleryItemImage}
        data-source={largeImageURL}
        data-id={id}
      />
    </li>
  );
}

GalleryItemRender.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
