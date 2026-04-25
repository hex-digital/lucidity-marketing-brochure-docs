import Image from 'next/image';
import styles from './FeatureGallery.module.css';

const galleryImages = Array.from({ length: 6 }, (_, index) => ({
  src: `https://picsum.photos/800/800?random=${index + 1}`,
  key: `feature-gallery-item-${index + 1}`,
}));

export function FeatureGallery() {
  return (
    <div className={styles.featureGallery}>
      {galleryImages.map((image) => (
        <Image
          key={image.key}
          alt=""
          src={image.src}
          width={800}
          height={800}
          className={styles.galleryItem}
        />
      ))}
    </div>
  );
}
