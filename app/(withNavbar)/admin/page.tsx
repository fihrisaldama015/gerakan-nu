import Hero from "@/components/Hero";
import ArrowDown from "@/components/atoms/arrow";
import AdminBeritaCard from "@/components/molecules/AdminBeritaCard";
import { BERITA_DUMMY } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

function AdminPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero page="admin" />
      <section className="p-10 w-full">
        <h1 className="text-5xl text-center font-bold">Berita Anda</h1>
        <p className="mb-10 text-2xl text-center font-medium">
          Beberapa Berita Yang Telah Di Rilis
        </p>
        <div className="flex flex-col gap-3">
          {BERITA_DUMMY.map((berita: Berita, index) => (
            <AdminBeritaCard key={index} berita={berita} />
          ))}
          <Link
            href="/admin/berita"
            className="flex flex-row-reverse gap-3 items-center text-2xl font-bold text-blue_primary"
          >
            <ArrowDown
              stroke="rgb(0 119 182)"
              className="-rotate-90 scale-150"
            />
            Lihat Semua
          </Link>
        </div>
      </section>
      <div className="relative border-y-[1rem] border-slate-200 w-full py-40 flex flex-col justify-center items-center">
        <Image
          src="/Element.png"
          alt="Hero"
          width={1440}
          height={810}
          className="absolute -z-10 h-auto w-screen object-contain"
          sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
          priority
          quality={100}
        />
        <h1 className="text-5xl text-center font-bold">
          Tambahkan Berita Baru Anda!!
        </h1>
        <Link href="admin/berita/add">
          <button className="py-2.5 px-5 flex gap-3 text-2xl font-semibold bg-blue_primary rounded-[20px] text-white mt-10">
            <Image src="/icons/add.svg" width={30} height={35} alt="add" />
            Current News
          </button>
        </Link>
      </div>
    </main>
  );
}

export default AdminPage;
