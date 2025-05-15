// src/components/layout/Header.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo_burn.png" // Or /logo.svg - path relative to public folder
            alt="QRY.zone Logo"
            width={32} // Specify intrinsic width of your logo file (e.g., 32x32, 48x48)
            height={32} // Specify intrinsic height
            className={styles.logoImage} // Optional: for additional styling not covered by Next/Image
          />
          {/* Optional: Add "QRY.zone" text next to it if desired */}
          {/* <span className={styles.logoText}>QRY.zone</span> */}
        </Link>
        <div className={styles.navLinks}>
          <Link href="/blog">Log</Link>
          <Link href="/etch">Etch</Link>
          <Link href="/about">Info</Link>
        </div>
      </nav>
    </header>
  );
}