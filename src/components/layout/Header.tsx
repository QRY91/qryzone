// src/components/layout/Header.tsx
"use client";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
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
          <button
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
          <div
            className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksOpen : ""}`}
          >
            <Link href="/site" onClick={closeMobileMenu}>
              Site
            </Link>
            <Link href="/journey" onClick={closeMobileMenu}>
              Journey
            </Link>
            <Link href="/explore" onClick={closeMobileMenu}>
              Explore
            </Link>
            <Link href="/methodology" onClick={closeMobileMenu}>
              Methodology
            </Link>
            <Link href="/about" onClick={closeMobileMenu}>
              About
            </Link>
            <Link href="/errata" onClick={closeMobileMenu}>
              Errata
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
