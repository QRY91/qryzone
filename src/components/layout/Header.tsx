// src/components/layout/Header.tsx
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        {" "}
        {/* Add global .container class */}
        <Link href="/" className={styles.logoLink}>
          QRY.zone {/* Maybe Qube logo here later */}
        </Link>
        <div className={styles.navLinks}>
          <Link href="/blog">Blog</Link>
          <Link href="/experiments">Experiments</Link>
          <Link href="/about">About Q</Link>
        </div>
      </nav>
    </header>
  );
}
