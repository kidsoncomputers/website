import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Define the type for individual image objects
interface ImageObject {
  src: string; // Required image URL
  caption?: string; // Optional caption
}

// Define the props for the ImageGallery component
interface ImageGalleryProps {
  images: ImageObject[]; // Array of image objects
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {

  return (
    <div className={styles.imageGallery}>
      {images.map((image, index) => (
        <div className={styles.imageItem} key={index}>
          {/* Wrap the image in an anchor tag */}
          <a href={useBaseUrl(image.src)} target="_blank" rel="noopener noreferrer">
            <img src={useBaseUrl(image.src)} alt={`Gallery image ${index + 1}`} />
          </a>
          {image.caption && <p className={styles.imageCaption}>{image.caption}</p>} {/* Display caption if it exists */}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;