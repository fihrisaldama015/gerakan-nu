"use client";
import { previewNewsImageURL, uploadNewsImages } from "@/lib/bucket";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

function FormDokumentasiBerita() {
  const dokumentasi = JSON.parse(localStorage.getItem("dokumentasi")!);
  const [gambar, setGambar] = useState<StringObject>(
    dokumentasi ? dokumentasi : {}
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleAddBerita = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const data = gambar;
    localStorage.setItem("dokumentasi", JSON.stringify(data));
    setIsLoading(false);
    router.push("/admin/berita/detail");
  };

  const handleAdditionalFile = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (!e.target?.files) return;
    setIsLoading(true);
    const uploadedFile = e.target?.files[0];
    try {
      const res = await uploadNewsImages(uploadedFile);
      const previewURL = previewNewsImageURL(res.$id);
      setGambar({
        ...gambar,
        url: previewURL,
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      return;
    }
    setIsLoading(false);
  };

  const handleAdditionalField = (
    value: string,
    normalizedName: string
  ): void => {
    setGambar({
      ...gambar,
      [normalizedName]: value,
    });
  };
  return (
    <form
      onSubmit={handleAddBerita}
      className="md:px-20 px-0 flex flex-col gap-7"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="dokumentasi" className="text-3xl font-bold">
          Dokumentasi 1
        </label>
        <input
          type="file"
          id="dokumentasi"
          accept=".jpg,.png,.svg,.gif"
          onChange={handleAdditionalFile}
          className="py-4 px-7 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
        />
        {gambar.hasOwnProperty("url") && (
          <div className="flex flex-col gap-3">
            <p>Preview gambar</p>
            <Image
              src={gambar["url"]}
              alt="dokumentasi"
              width={400}
              height={244}
              className="h-auto w-[600px] object-contain rounded-md"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="keterangan" className="text-3xl font-bold">
          Keterangan Gambar
        </label>
        <input
          type="text"
          id="penulis"
          placeholder="Tuliskan Nama Penulis Disini"
          value={
            gambar.hasOwnProperty("keterangan") ? gambar["keterangan"] : ""
          }
          onChange={(e) => handleAdditionalField(e.target.value, "keterangan")}
          className="py-4 px-7 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
        />
      </div>
      <button
        type="button"
        className="relative py-3 px-5 w-full text-2xl font-bold text-white bg-green_primary rounded-[20px] hover:brightness-110 transition-all"
      >
        <Image
          src="/icons/add.svg"
          alt="next"
          width={30}
          height={30}
          className="absolute left-4"
        />
        Tambahkan Gambar Lainnya
      </button>
      <div className="flex gap-5">
        <Link href="/admin/berita/add" className="flex flex-1">
          <button
            type="button"
            className="py-3 px-5 w-full flex items-center justify-between gap-3 text-2xl font-bold text-white bg-[#B60000] rounded-[20px] hover:brightness-110 transition-all"
          >
            <Image
              src="/icons/next.svg"
              alt="next"
              width={30}
              height={30}
              className="rotate-180"
            />
            Sebelumnya
          </button>
        </Link>
        <button
          type="submit"
          disabled={isLoading}
          className="py-3 px-5 flex flex-1 justify-between items-center gap-3 text-2xl font-bold text-white bg-blue_primary rounded-[20px] hover:brightness-110 transition-all disabled:cursor-not-allowed disabled:bg-slate-500"
        >
          Selanjutnya
          <Image
            src="/icons/next.svg"
            alt="next"
            width={30}
            height={30}
            className=""
          />
        </button>
      </div>
    </form>
  );
}

export default FormDokumentasiBerita;
