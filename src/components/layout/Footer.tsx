// src/components/layout/Footer.tsx
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>©QRY</p> {/* Terse copyright */}
      </div>
    </footer>
  );
}