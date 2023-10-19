import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import NewsCard from "@/components/molecules/NewsCard";
import { getAllBerita, getBerita } from "@/utils/berita";
import { BERITA_DUMMY } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

async function NewsDetail({ params }: { params: { newsId: string } }) {
  const berita = await getBerita(params.newsId);
  const allBerita = await getAllBerita();
  if (!berita) return null;
  if (!allBerita) return null;

  return (
    <section className="px-10 py-6 flex flex-col gap-5">
      <Breadcrumbs title={berita.title} />
      <div className="mb-5 flex gap-2 justify-between items-center">
        <div>
          <p className="text-neutral-600 text-xl font-semibold">
            BERITA | {new Date(berita.date).toLocaleString()}
          </p>
          <h1
            className="text-5xl font-semibold tracking-tighter"
            style={{ lineHeight: "1.5em" }}
          >
            {berita.title}
          </h1>
          <div className="my-7 flex gap-16">
            <Image
              src="/icons/facebook_fill.svg"
              width={40}
              height={40}
              alt="facebook-icon"
            />
            <Image
              src="/icons/whatsapp_fill.svg"
              width={40}
              height={40}
              alt="whatsapp-icon"
            />
            <Image
              src="/icons/email_fill.svg"
              width={40}
              height={40}
              alt="email-icon"
            />
            <Image
              src="/icons/link_fill.svg"
              width={40}
              height={40}
              alt="link-icon"
            />
          </div>
          <div>
            <p className="text-2xl font-semibold text-neutral-600">Penulis :</p>
            <p className="text-2xl font-medium text-neutral-950">
              Mas Muhammad Aqil Salim
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image
            src={berita.dokumentasi.url}
            width={400}
            height={244}
            alt="postImage"
            className="h-auto w-[600px] object-contain"
          />
          <p>Gambar: {berita.dokumentasi.keterangan}</p>
        </div>
      </div>
      <div className="pr-10 flex flex-col gap-2">
        <h3 className="text-3xl font-bold text-neutral-900">
          {new Date(berita.date).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h3>
        <div
          className="text-xl text-neutral-800 text-justify"
          style={{ lineHeight: "1.5em" }}
          dangerouslySetInnerHTML={{ __html: berita.body }}
        ></div>
      </div>
      <div className="py-7 px-20 flex justify-between md:w-[80vw] mx-auto bg-[#C9C9C9] rounded-3xl">
        <div className="flex items-center gap-2">
          <Image src="/icons/like.svg" alt="like" width={50} height={50} />
          <span className="text-4xl font-bold text-blue_primary">10</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/icons/dislike.svg" alt="like" width={50} height={50} />
          <span className="text-4xl font-bold text-neutral-900">10</span>
        </div>
        <Link href={`/berita/${params.newsId}/komentar`}>
          <div className="flex items-center gap-2">
            <Image src="/icons/comment.svg" alt="like" width={50} height={50} />
            <span className="text-4xl font-bold text-neutral-900">10</span>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Image src="/icons/share.svg" alt="like" width={50} height={50} />
        </div>
      </div>
      <div className="mb-14 flex gap-5">
        <h1 className="font-bold text-4xl">Tag</h1>
        {berita.tags.map((tag: string, index: number) => (
          <div
            key={index}
            className="py-2.5 px-5 text-xl rounded-2xl bg-[#c9c9c9]"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-12">
        <h1 className="text-4xl font-semibold border-b-8 border-green_primary w-fit">
          PILIHAN UNTUK ANDA
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {allBerita.map((berita: Berita, index: number) => (
            <NewsCard
              key={index}
              index={berita.id}
              imgUrl={berita.dokumentasi.url}
              date={new Date(berita.date).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              title={berita.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsDetail;
