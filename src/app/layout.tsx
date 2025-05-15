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
      <body
        className={`${inter.className} bg-gray-900 text-gray-100 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow container mx-auto p-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
