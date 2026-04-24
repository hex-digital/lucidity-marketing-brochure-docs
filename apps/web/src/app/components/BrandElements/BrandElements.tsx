import styles from './BrandElements.module.css';

export function BrandElements() {
  return (
    <div className={styles.brandElements} aria-hidden="true">
      <span className={styles.gradientTop} />
      <span className={styles.gradientRight} />
    </div>
  );
}
