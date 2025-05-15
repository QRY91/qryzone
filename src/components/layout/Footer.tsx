// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
      <p>
        © {new Date().getFullYear()} QRY.zone | Questions mandatory! Answers
        optional...
      </p>
    </footer>
  );
}
