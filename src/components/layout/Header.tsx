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
            <Link href="/explore" onClick={closeMobileMenu}>
              Explore
            </Link>
            <Link href="/about" onClick={closeMobileMenu}>
              About
            </Link>
            <a href="/fun/" onClick={closeMobileMenu}>
              Fun
            </a>
            <a
              href="https://github.com/QRY91"
              onClick={closeMobileMenu}
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
