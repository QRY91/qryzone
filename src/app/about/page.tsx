// src/app/about/page.tsx
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutContent}>
      <h1>About Q & QRY.zone</h1>
      <p>
        QRY.zone is the digital sanctum of Q (that's me!). I'm a contemplative
        technologist, an inquisitive architect, and an aloof artisan, yapping
        about my obscure interests.
      </p>
      <p>
        This space is dedicated to the virtue of process, metamorphosis through
        making, and building in the open. It's my learning log, my creative
        playground.
      </p>
      <h2>My Motto:</h2>
      <p className={styles.motto}>"Do No Harm, Take No Shit."</p>
      <h2>Site Philosophy:</h2>
      <p className={styles.philosophy}>
        "Questions mandatory! Answers optional..."
      </p>
    </div>
  );
}
