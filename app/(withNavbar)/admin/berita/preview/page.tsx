"use client";
import draftToHtml from "draftjs-to-html";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function PreviewBerita() {
  const berita = JSON.parse(localStorage.getItem("berita")!);
  const dokumentasi = JSON.parse(localStorage.getItem("dokumentasi")!);
  const detailBerita = JSON.parse(localStorage.getItem("detailBerita")!);

  const router = useRouter();

  const postBerita = async () => {
    try {
      const response = await fetch("/api/berita", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: berita.judul,
          body: draftToHtml(detailBerita.model),
          date: berita.tglBerita,
          author: berita.penulis,
          city: berita.kota,
          tags: detailBerita.tags,
          dokumentasi: dokumentasi,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw Error(data.message);
      alert("Berhasil mempublish berita");
      localStorage.removeItem("berita");
      localStorage.removeItem("dokumentasi");
      localStorage.removeItem("detailBerita");
      location.href = "/admin";
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;
        alert(errorMessage);
      }
    }
  };

  return (
    <section className="p-10 flex flex-col gap-7">
      <div className="flex justify-between">
        <Link href="/admin/berita/detail">
          <button
            type="button"
            className="py-3 px-5 flex items-center gap-3 text-2xl font-bold text-white bg-[#B60000] rounded-[20px] hover:brightness-110 transition-all"
          >
            <Image
              src="/icons/edit_white.svg"
              alt="next"
              width={30}
              height={30}
              className=""
            />
            Edit Lagi
          </button>
        </Link>
        <button
          type="button"
          onClick={postBerita}
          className="py-3 px-5 flex items-center gap-3 text-2xl font-bold text-white bg-blue_primary rounded-[20px] hover:brightness-110 transition-all"
        >
          Publish
          <Image
            src="/icons/save.svg"
            alt="next"
            width={30}
            height={30}
            className=""
          />
        </button>
      </div>
      <div className="mb-5 gap-2 flex justify-between items-center">
        <div className="flex flex-col justify-between gap-7">
          <div>
            <p className="text-neutral-600 text-xl font-semibold">
              {new Date(berita.tglBerita).toLocaleString()}
            </p>
            <h1
              className="text-5xl font-semibold tracking-tighter"
              style={{ lineHeight: "1.5em" }}
            >
              {berita.judul}
            </h1>
          </div>
          <div>
            <p className="text-2xl font-semibold text-neutral-600">Penulis :</p>
            <p className="text-2xl font-medium text-neutral-950">
              {berita.penulis}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image
            src={dokumentasi[0].url}
            width={400}
            height={244}
            alt="postImage"
            className="h-auto w-[600px] object-contain"
          />
          <p>Gambar: {dokumentasi[0].keterangan}</p>
        </div>
      </div>
      <div className="pr-10 flex flex-col gap-7">
        <h3 className="text-3xl font-bold text-neutral-900">
          {berita.kota},{" "}
          {new Date(berita.tglBerita).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h3>
        <div
          className="text-neutral-800"
          dangerouslySetInnerHTML={{ __html: draftToHtml(detailBerita.model) }}
        ></div>
        <div className="mb-14 flex gap-5">
          <h1 className="font-bold text-4xl">Tag</h1>
          {detailBerita.tags.map((tag: string, index: number) => (
            <div
              key={index}
              className="py-2.5 px-5 text-xl rounded-2xl bg-[#c9c9c9]"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PreviewBerita;
