import type { Metadata } from "next";
import Header from "./Header";
import { poppins } from "./fonts";
import "./globals.css";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Gerakan Nahdliyin Bersatu",
  description:
    "Menyajikan Berita Aktual Terpercaya dan Terkini dalam Satu Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}