import Image from 'next/image';
import { cn } from '@/app/utils/cn';
import styles from './FeatureGallery.module.css';

const galleryImages = [
  {
    key: crypto.randomUUID(),
    src: '/images/features/modular-content-1-light.jpg',
    alt: 'Screenshot of Lucidity.js modular blocks in sanity studio',
  },
  {
    key: crypto.randomUUID(),
    src: '/images/features/redirect-doc-1-light.jpg',
    alt: 'Example of redirect document in sanity studio',
    style: 'object-top',
    width: 381,
    height: 311,
  },
  {
    key: crypto.randomUUID(),
    src: '/images/features/recycling-bin-1-light.jpg',
    alt: 'Screenshot of Lucidity.js recycling-bin',
  },
  {
    key: crypto.randomUUID(),
    src: '/images/features/presentation-tool-1-light.jpg',
    alt: 'Example of Lucidity.js presentation tool',
  },
  {
    key: crypto.randomUUID(),
    src: '/images/features/slug-redirect-field-1-light.jpg',
    alt: 'Screenshot of Lucidity.js slug redirect field and info',
  },
  {
    key: crypto.randomUUID(),
    src: '/images/features/workflow-1-light.jpg',
    alt: 'Screenshot of Lucidity.js workflow',
    width: 1200,
    height: 474,
  },
];

export function FeatureGallery() {
  return (
    <div className={styles.featureGallery}>
      {galleryImages.map((image) => (
        <Image
          key={image.key}
          alt={image.alt}
          src={image.src}
          width={image.width || 800}
          height={image.height || 800}
          className={cn(styles.galleryItem, image.style)}
        />
      ))}
    </div>
  );
}
