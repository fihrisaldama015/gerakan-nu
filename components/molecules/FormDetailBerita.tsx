"use client";

import {
  EditorState,
  RawDraftContentState,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useEffect, useState } from "react";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((v) => v.Editor),
  {
    ssr: false,
  }
);

function FormDetailBerita() {
  const [tags, setTags] = useState<string[]>([]);
  const [tempTags, setTempTags] = useState<string>("");
  const [loaded, setLoaded] = useState<boolean>(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoaded(true);
    }
    const local_detailBerita = localStorage.getItem("detailBerita");
    if (!local_detailBerita) return;

    const detailBerita: { model: RawDraftContentState; tags: string[] } =
      JSON.parse(local_detailBerita);
    // setModel(detailBerita.model);
    setTags(detailBerita.tags);
    const state = convertFromRaw(detailBerita.model);
    setEditorState(EditorState.createWithContent(state));
    // const blocksFromHTML = convertFromHTML(detailBerita.model);
    // const state = ContentState.createFromBlockArray(
    //   blocksFromHTML.contentBlocks,
    //   blocksFromHTML.entityMap
    // );
    // setEditorState(EditorState.createWithContent(state));
  }, []);

  const handleAddBerita = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const raw = convertToRaw(editorState.getCurrentContent());
    const data = {
      model: raw,
      tags,
    };
    localStorage.setItem("detailBerita", JSON.stringify(data));
    router.push("/admin/berita/preview");
  };

  const tambahTag = () => {
    setTags([...tags, tempTags]);
    setTempTags("");
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
        {loaded && (
          <Editor
            editorState={editorState}
            editorClassName="editor"
            wrapperClassName="wrapperEditor"
            onEditorStateChange={setEditorState}
            toolbar={{
              fontFamily: {
                options: ["Arial"],
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
              },
            }}
          />
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="penulis" className="text-3xl font-bold">
          Tambahkan Tagar Anda
        </label>
        <div className="flex md:flex-row flex-col gap-3">
          <input
            type="text"
            id="penulis"
            placeholder="Tambahkan Tag"
            value={tempTags}
            onChange={(e) => setTempTags(e.target.value)}
            className="py-4 px-7 flex flex-1 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
          />
          <button
            type="button"
            disabled={tempTags.length === 0}
            onClick={tambahTag}
            className="py-3 px-5 flex items-center gap-2 w-fit font-bold text-white bg-blue_primary rounded-[20px] hover:brightness-110 transition-all disabled:cursor-not-allowed"
          >
            <Image
              src="/icons/add.svg"
              alt="next"
              width={16}
              height={16}
              className=""
            />
            <span>Tambahkan Tag</span>
          </button>
        </div>
        <h1>Tag Terpilih</h1>
        <div className="flex gap-3">
          {tags.length > 0 &&
            tags.map((tag: string, index: number) => (
              <div
                key={index}
                className="py-2.5 px-5 text-xl rounded-2xl bg-[#c9c9c9] w-fit"
              >
                {tag}
              </div>
            ))}
        </div>
      </div>
      <div className="flex gap-5">
        <Link href="/admin/berita/dokumentasi" className="flex flex-1">
          <button
            type="button"
            className="py-3 px-5 flex justify-between items-center gap-3 w-full text-2xl font-bold text-white bg-[#B60000] rounded-[20px] hover:brightness-110 transition-all"
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
          className="py-3 px-5 flex flex-1 justify-between items-center gap-3 text-2xl font-bold text-white bg-blue_primary rounded-[20px] hover:brightness-110 transition-all"
        >
          Preview
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

export default FormDetailBerita;
