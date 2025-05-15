// src/components/layout/Footer.tsx
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {" "}
        {/* Add global .container class */}
        <p>
          © {new Date().getFullYear()} QRY.zone | Questions mandatory! Answers
          optional...
        </p>
        {/* Maybe links to socials or other things here later */}
      </div>
    </footer>
  );
}
