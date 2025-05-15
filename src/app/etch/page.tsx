// src/app/etch/page.tsx
import Image from 'next/image';
import styles from './page.module.css';

export default function EtchPage() {
  const logoPath = "/logo_animation.gif"; // Or your static logo.png if preferred for some examples
  const staticLogoPath = "/q_blk_128.png"; // Assuming you have a static version (e.g., the green one on transparent bg)

  return (
    <div className={styles.etchContainer}>
      <h1>Etchings & Experiments</h1>
      <p className={styles.intro}>
        A space for visual tests, CSS explorations, and early Verve manifestations.
        Here, we're playing with different ways to present the QRY.zone identity.
      </p>

      <section className={styles.experimentSection}>
        <h2>Base Logos</h2>
        <div className={styles.logoGrid}>
          <div>
            <p>Animated GIF (Unoptimized)</p>
            <Image
              src="/logo_animation.gif" // Corrected path
              alt="QRY.zone Animated Logo"
              width={128}
              height={128}
              unoptimized
              priority // Good to keep if it's prominent
            />
          </div>
          <div>
            <p>Static Logo (e.g., Green)</p>
            {/* Replace with your actual static logo filename */}
            <Image
              src={staticLogoPath} 
              alt="QRY.zone Static Logo"
              width={128}
              height={128}
            />
          </div>
           <div>
            <p>Static Logo (Black for filter tests)</p>
            {/* Assuming you have a black version in public/logo-black.png */}
            <Image 
              src="/q_blk_128.png" 
              alt="QRY.zone Static Black Logo"
              width={128}
              height={128}
              id="blackLogoForFilters" // For targeting with CSS if needed
            />
          </div>
        </div>
      </section>

      <section className={styles.experimentSection}>
        <h2>Opacity Blending</h2>
        <div className={styles.logoGrid}>
          <div>
            <p>Opacity 0.1 (Subtle)</p>
            <Image src={staticLogoPath} alt="Logo Opacity 0.1" width={64} height={64} className={styles.opacity10} />
          </div>
          <div>
            <p>Opacity 0.3</p>
            <Image src={staticLogoPath} alt="Logo Opacity 0.3" width={64} height={64} className={styles.opacity30} />
          </div>
          <div>
            <p>Opacity 0.6 (Hover for 0.9)</p>
            <Image src={staticLogoPath} alt="Logo Opacity 0.6" width={64} height={64} className={`${styles.opacity60} ${styles.opacityHover90}`} />
          </div>
        </div>
      </section>

    </div>
  );
}