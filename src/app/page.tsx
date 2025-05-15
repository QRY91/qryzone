// src/app/page.tsx
import styles from "./page.module.css"; // If you create the CSS module

export default function HomePage() {
  return (
    <div className={styles.heroSection}>
      {" "}
      {/* Example usage */}
      <h1 className="text-5xl mb-6">
        Welcome to <span className="text-[var(--color-accent)]">QRY</span>.zone
      </h1>{" "}
      {/* Example of using CSS var inline for accent */}
      <p className={styles.tagline}>
        This is the personal cosmos of Q. A place for creative exploration,
        persistent learning, and query.
      </p>
      <p className="text-lg mt-4">
        <em>"Questions mandatory! Answers optional..."</em>
      </p>
    </div>
  );
}
