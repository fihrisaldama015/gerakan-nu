import Hero from "@/components/Hero";
import ArrowDown from "@/components/atoms/arrow";
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
            <div
              key={index}
              className="p-[20px] w-full flex md:flex-row flex-col gap-7 rounded-[30px] bg-slate-200"
            >
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src="/PostImage.png"
                  width={300}
                  height={300}
                  alt="post"
                  className="w-[300px] h-auto object-contain rounded-[20px]"
                />
              </div>
              <div className="w-full flex lg:flex-row flex-col justify-between gap-7">
                <div className="flex flex-col justify-between">
                  <h2 className="text-[28px] font-semibold truncate lg:w-96 md:w-80 w-full">
                    {berita.title}
                  </h2>
                  <p className="text-lg font-semibold">
                    Penulis: {berita.author}
                  </p>
                  <p>{berita.date}</p>
                  <span>10 Like, 02 Dislike & 4 Comment</span>
                </div>
                <div className="flex lg:flex-col flex-row lg:justify-center md:justify-start justify-center items-stretch gap-7">
                  <button className="py-2.5 px-5 flex gap-4 text-[22px] font-semibold bg-blue_primary rounded-[10px] text-white">
                    <Image
                      src="/icons/edit.svg"
                      width={30}
                      height={35}
                      alt="edit"
                    />
                    Edit
                  </button>
                  <button className="py-2.5 px-5 flex gap-4 text-[22px] font-semibold bg-[#B60000] rounded-[10px] text-white">
                    <Image
                      src="/icons/delete.svg"
                      width={30}
                      height={35}
                      alt="delete"
                    />
                    Delete
                  </button>
                </div>
              </div>
            </div>
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
