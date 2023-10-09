import ArrowDown from "@/components/atoms/arrow";
import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import CommentCard from "@/components/molecules/CommentCard";
import { Comment } from "@/types/comment";
import { getDetailBerita } from "@/utils/berita";
import { COMMENT_DUMMY } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

function Komentar({ params }: { params: { newsId: string } }) {
  const berita = getDetailBerita(parseInt(params.newsId));
  return (
    <section className="px-10 py-6 flex flex-col gap-5">
      <Breadcrumbs title={berita.title} />
      <h1 className="mt-6 text-4xl font-semibold border-b-8 border-green_primary w-fit">
        KOMENTAR
      </h1>
      <div className="p-5 pr-8 rounded-[30px] flex gap-7 justify-between bg-[#C9C9C9]">
        <Image
          src="/PostImage.png"
          width={400}
          height={244}
          alt="postImage"
          className="w-auto h-auto object-contain rounded-[20px]"
        />
        <div>
          <h1 className="mb-2 text-3xl font-semibold">{berita.title}</h1>
          <b className="text-lg">{berita.author}</b>
          <p className="mb-2 text-lg">{berita.date}</p>
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
      <form className="flex flex-col gap-2">
        <textarea
          name="comment"
          id="comment"
          cols={30}
          rows={10}
          placeholder="Tulis Komentar Anda Disini....."
          className="p-5 h-[120px] rounded-[10px] ring-1 ring-neutral-800 placeholder:text-neutral-800 text-lg"
        />
        <b>
          *Note : Tetap Berkomentar dengan bijaksana dan bertanggung jawab,
          sesuai dengan yang diatur di dalam UU ITE
        </b>
        <div className="flex flex-row-reverse">
          <button
            type="submit"
            className="bg-blue_primary hover:brightness-110 px-[30px] py-2.5 rounded-[10px] font-bold text-white transition-all"
          >
            Kirim
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-6">
        <span className="flex gap-1">
          <h1 className="font-bold text-xl">Terbaru</h1>
          <ArrowDown stroke="black" />
        </span>
        {COMMENT_DUMMY.map((comment: Comment, index: number) => (
          <div key={index}>
            <CommentCard data={comment} />
          </div>
        ))}
        <div className="flex justify-center items-center gap-3">
          <b>4 dari 4 Komentar</b>
          <div className="p-2.5 w-[30px] h-[30px] flex justify-center items-center bg-blue_primary rounded-full">
            <ArrowDown stroke="white" className="-rotate-90 scale-150" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Komentar;
