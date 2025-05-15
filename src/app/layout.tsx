// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Your Tailwind base styles
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QRY.zone - The Query Zone of Q",
  description: "A personal cosmos of creation, learning, and query.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {" "}
        {/* Removed bg/text from body, it's in globals.css now */}
        <Header />
        <main className="flex-grow container py-8">
          {" "}
          {/* Added .container and consistent padding */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
