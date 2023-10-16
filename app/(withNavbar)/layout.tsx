import type { Metadata } from "next";
import Footer from "./Footer";
import Header from "./Header";
import { poppins } from "@/fonts";
import "../globals.css";

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
        <main className="pt-[6rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
