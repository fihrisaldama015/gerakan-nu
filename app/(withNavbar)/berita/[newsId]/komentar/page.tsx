import ArrowDown from "@/components/atoms/arrow";
import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import CommentCard from "@/components/molecules/CommentCard";
import CommentForm from "@/components/molecules/CommentForm";
import { Comment } from "@/types/comment";
import { getBerita } from "@/utils/berita";
import { getAllKomentar } from "@/utils/komentar";
import { getUserData } from "@/utils/user";
import Image from "next/image";
import Link from "next/link";

async function Komentar({ params }: { params: { newsId: string } }) {
  const berita = await getBerita(params.newsId);
  const komentar = await getAllKomentar(params.newsId);
  if (!komentar) return null;
  if (!berita) return null;
  const { data: user }: { data: User } = await getUserData();

  return (
    <section className="px-10 py-6 flex flex-col gap-5">
      <Breadcrumbs title={berita.title} />
      <h1 className="mt-6 text-4xl font-semibold border-b-8 border-green_primary w-fit">
        KOMENTAR
      </h1>
      <div className="p-5 pr-8 rounded-[30px] flex gap-7 justify-between bg-slate-200">
        <Image
          src={berita.dokumentasi[0].url}
          width={400}
          height={244}
          alt="postImage"
          className="w-auto h-[16rem] object-contain rounded-[20px]"
        />
        <div className="flex flex-col flex-1">
          <h1 className="mb-2 text-3xl font-semibold">{berita.title}</h1>
          <b className="text-lg">{berita.author}</b>
          <p className="mb-2 text-lg">
            {new Date(berita.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "Asia/Jakarta",
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
          <div
            className="text-xl text-neutral-800 text-justify h-[4rem] overflow-hidden"
            style={{ lineHeight: "1.5em" }}
            dangerouslySetInnerHTML={{ __html: berita.body }}
          ></div>
          <Link
            href={`/berita/${berita.id}`}
            className="text-blue_primary font-bold text-base"
          >
            Kembali Membaca Artikel
          </Link>
        </div>
      </div>
      <CommentForm newsId={params.newsId} email={user?.email} />
      <div className="flex flex-col gap-6">
        <span className="flex gap-1">
          <h1 className="font-bold text-xl">Terbaru</h1>
          <ArrowDown stroke="black" />
        </span>
        {komentar.map((comment: Comment, index: number) => (
          <div key={index}>
            <CommentCard data={comment} />
          </div>
        ))}
        {komentar.length === 0 && (
          <div className="flex justify-center items-center gap-3 text-slate-500">
            <p>Belum ada komentar</p>
          </div>
        )}
        <div className="flex justify-center items-center gap-3">
          <b>
            {komentar.length} dari {komentar.length} Komentar
          </b>
          <div className="p-2.5 w-[30px] h-[30px] flex justify-center items-center bg-blue_primary rounded-full">
            <ArrowDown stroke="white" className="-rotate-90 scale-150" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Komentar;
