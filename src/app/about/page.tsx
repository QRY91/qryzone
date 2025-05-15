// src/app/about/page.tsx
import styles from './page.module.css'; // Assuming src/app/about/page.module.css

export default function AboutPage() {
  return (
    <div className={styles.contentWrapper}> {/* New wrapper class */}
      <h1>Info</h1>
      <p className={styles.statement}>
        QRY.zone: A space. For query, creation, learning.
      </p>
      <p className={styles.statement}>
        Motto: Do No Harm, Take No Shit.
      </p>
      <p className={styles.statement}>
        Philosophy: Questions mandatory! Answers optional...
      </p>
      {/* Conceptual presence of Terra and Verve mentioned minimally if at all initially */}
    </div>
  );
}