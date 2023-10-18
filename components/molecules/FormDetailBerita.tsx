"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/js/plugins/align.min.js";

function FormDetailBerita() {
  const [tags, setTags] = useState<string>("");
  const [model, setModel] = useState<string>(() => {
    return localStorage.getItem("savedHtml") || "";
  });

  const router = useRouter();
  const handleAddBerita = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      model,
      tags,
    };
    localStorage.setItem("detailBerita", JSON.stringify(data));
    router.push("/admin/berita/preview");
  };

  return (
    <form
      onSubmit={handleAddBerita}
      className="md:px-20 px-0 flex flex-col gap-7"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="judul" className="text-3xl font-bold">
          Detail Berita
        </label>
        <FroalaEditor
          tag="textarea"
          model={model}
          onModelChange={(value: string) => setModel(value)}
          config={{
            placeholderText: "Tuliskan Detailnya Disini",
            fontFamilySelection: true,
            fontSizeSelection: true,
            saveInterval: 10000,
            events: {
              "save.before": function (html: string) {
                localStorage.setItem("savedHTML", html);
              },
            },
          }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="penulis" className="text-3xl font-bold">
          Tambahkan Tagar Anda
        </label>
        <input
          type="text"
          id="penulis"
          placeholder="Tuliskan Nama Penulis Disini"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="py-4 px-7 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
        />
      </div>
      <div className="flex gap-5">
        <button
          type="button"
          className="relative py-3 px-5 w-full text-2xl font-bold text-white bg-[#B60000] rounded-[20px] hover:brightness-110 transition-all"
        >
          <Image
            src="/icons/next.svg"
            alt="next"
            width={30}
            height={30}
            className="absolute left-4 rotate-180"
          />
          Sebelumnya
        </button>
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
          Preview
        </button>
      </div>
    </form>
  );
}

export default FormDetailBerita;
