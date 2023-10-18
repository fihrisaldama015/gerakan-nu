import FormDokumentasiBerita from "@/components/molecules/FormDokumentasiBerita";
import Image from "next/image";
import Link from "next/link";

function DokumentasiBerita() {
  return (
    <section className="p-6 min-h-screen w-full flex flex-col items-center justify-center bg-slate-200">
      <Image
        src="/Element.png"
        alt="Hero"
        width={1440}
        height={810}
        className="absolute z-0 h-auto w-screen object-contain"
        sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
        priority
        quality={100}
      />
      <div className="p-[30px] z-10 rounded-[20px] bg-white md:w-[80vw] w-full">
        <div className="mb-20 flex justify-between items-center">
          <Link
            href="/admin/berita/add"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
          >
            <Image
              src="/icons/arrow_left.svg"
              alt="arrow"
              width={30}
              height={30}
              className="w-auto md:h-6 h-4 cursor-pointer"
            />
          </Link>
          <h1 className="font-bold md:text-4xl text-2xl">Tambahkan Berita</h1>
          <span></span>
        </div>
        <FormDokumentasiBerita />
      </div>
    </section>
  );
}

export default DokumentasiBerita;
