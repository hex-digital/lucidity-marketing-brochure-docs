import styles from './FeatureGallery.module.css';

export function FeatureGallery() {
  return (
    <div className={styles.featureGallery}>
      <img
        alt="something"
        src="https://picsum.photos/800/800"
        className={styles.galleryItem}
      />
      <img
        alt="something"
        src="https://picsum.photos/800/800"
        className={styles.galleryItem}
      />
      <img
        alt="something"
        src="https://picsum.photos/800/800"
        className={styles.galleryItem}
      />
      <img
        alt="something"
        src="https://picsum.photos/800/800"
        className={styles.galleryItem}
      />
      <img
        alt="something"
        src="https://picsum.photos/800/800"
        className={styles.galleryItem}
      />
      <img
        alt="something"
        src="https://picsum.photos/800/800"
        className={styles.galleryItem}
      />
    </div>
  );
}
