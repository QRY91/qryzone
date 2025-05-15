// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header'; // Adjusted path if Header is in src/components
import Footer from '@/components/layout/Footer'; // Adjusted path

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'qry.zone',
  description: 'zone of creation, learning, and query.',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        {/* Apply container and padding directly or via a CSS module for main */}
        <main className="container" style={{ flexGrow: 1, paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}