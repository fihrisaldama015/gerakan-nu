"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function FormBerita() {
  const [judul, setJudul] = useState<string>("");
  const [penulis, setPenulis] = useState<string>("");
  const [tglBerita, setTglBerita] = useState<string>("");
  const [kota, setKota] = useState<string>("");
  const router = useRouter();
  const handleAddBerita = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      judul,
      penulis,
      tglBerita,
      kota,
    };
    localStorage.setItem("berita", JSON.stringify(data));
    router.push("/admin/berita/dokumentasi");
  };

  return (
    <form
      onSubmit={handleAddBerita}
      className="md:px-20 px-0 flex flex-col gap-7"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="judul" className="text-3xl font-bold">
          Judul Berita
        </label>
        <input
          type="text"
          id="judul"
          placeholder="Tuliskan Judulmu Disini"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="py-4 px-7 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="penulis" className="text-3xl font-bold">
          Penulis/Redaksi
        </label>
        <input
          type="text"
          id="penulis"
          placeholder="Tuliskan Nama Penulis Disini"
          value={penulis}
          onChange={(e) => setPenulis(e.target.value)}
          className="py-4 px-7 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="tglBerita" className="text-3xl font-bold">
          Tanggal Berita
        </label>
        <input
          type="datetime-local"
          id="tglBerita"
          placeholder="Masukkan Nomor"
          value={tglBerita}
          onChange={(e) => setTglBerita(e.target.value)}
          className="py-4 px-7 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="kota" className="text-3xl font-bold">
          Kota Lokasi Kejadian
        </label>
        <input
          type="text"
          id="kota"
          placeholder="Masukkan Kota Lokasi"
          value={kota}
          onChange={(e) => setKota(e.target.value)}
          className="py-4 px-7 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
        />
      </div>
      <button
        type="submit"
        className="relative py-3 px-5 w-full text-2xl font-bold text-white bg-blue_primary rounded-[20px] hover:brightness-110 transition-all"
      >
        <Image
          src="/icons/next.svg"
          alt="next"
          width={30}
          height={30}
          className="absolute right-4"
        />
        Selanjutnya
      </button>
    </form>
  );
}

export default FormBerita;
