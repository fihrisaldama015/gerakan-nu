"use client";
import Image from "next/image";

function PreviewBerita() {
  const berita = JSON.parse(localStorage.getItem("berita")!);
  const dokumentasi = JSON.parse(localStorage.getItem("dokumentasi")!);
  const detailBerita = JSON.parse(localStorage.getItem("detailBerita")!);

  return (
    <section className="p-10">
      <div className="mb-5 flex gap-2 justify-between items-center">
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
          <div>
            <p className="text-2xl font-semibold text-neutral-600">Penulis :</p>
            <p className="text-2xl font-medium text-neutral-950">
              {berita.penulis}
            </p>
          </div>
        </div>
        <Image
          src="/PostImage.png"
          width={400}
          height={244}
          alt="postImage"
          className="h-auto w-[600px] object-contain"
        />
      </div>
      <div className="pr-10 flex flex-col gap-2">
        <h3 className="text-3xl font-bold text-neutral-900">
          {berita.kota}, {new Date(berita.tglBerita).toTimeString()}
        </h3>
        <div
          className="text-xl text-neutral-800 text-justify"
          style={{ lineHeight: "1.5em" }}
          dangerouslySetInnerHTML={{ __html: detailBerita.model }}
        ></div>
      </div>
    </section>
  );
}

export default PreviewBerita;
