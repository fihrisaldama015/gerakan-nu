import type { Metadata } from "next";
import { poppins } from "@/fonts";
import "../globals.css";
import Image from "next/image";

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
    <html lang="en">
      <body className={poppins.className}>
        <section className="flex min-h-screen w-screen">
          <div className="bg-blue_primary md:w-1/2 min-h-screen md:flex items-center justify-center hidden">
            <Image
              src="/logo.svg"
              width={400}
              height={80}
              alt="logo"
              className="w-[400px] h-auto object-contain"
            />
          </div>
          <div className="p-12 flex flex-col justify-center flex-1 gap-7 bg-white">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
