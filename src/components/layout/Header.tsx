// components/layout/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
          QRY.zone
        </Link>
        <div>
          <Link href="/blog" className="mr-4 hover:text-gray-300">
            Blog
          </Link>
          <Link href="/experiments" className="mr-4 hover:text-gray-300">
            Experiments
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About Q
          </Link>
        </div>
      </nav>
    </header>
  );
}
