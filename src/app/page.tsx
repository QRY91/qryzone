// src/app/page.tsx
import Image from 'next/image'; // Import Next.js Image component
// import styles from './page.module.css'; // Optional

export default function HomePage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(70vh - var(--space-xl) * 2)', // Adjust as needed
      textAlign: 'center'
    }}>
      <Image
        src="/logo_animation.gif" // Path to your GIF in the public folder
        alt="QRY.zone Animated Logo"
        width={128}  // Specify the intrinsic width of your GIF
        height={128} // Specify the intrinsic height of your GIF
        unoptimized // Important for GIFs to prevent Next.js from trying to optimize them as static images
      />
      {/* <p style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)', marginTop: 'var(--space-lg)' }}>
        "Q"
      </p> */}
    </div>
  );
}