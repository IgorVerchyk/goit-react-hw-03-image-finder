import React from "react";
import GalleryItemRender from "./ImageGalleryItem";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

export default function GalleryRender({ images, onOpenModal }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, ...image }) => (
        <GalleryItemRender key={id} {...image} onOpenModal={onOpenModal} />
      ))}
    </ul>
  );
}

GalleryItemRender.propTypes = {
  image: PropTypes.array,
  id: PropTypes.string,
  onOpenModal: PropTypes.func,
};
