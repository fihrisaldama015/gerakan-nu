"use client";
import { Comment } from "@/types/comment";
import Image from "next/image";
import { FormEvent, useState } from "react";

type CommentProps = {
  comment: Comment;
  newsId: string;
  email: string;
};

function CommentCard({ comment, newsId, email }: CommentProps) {
  const [isReply, setIsReply] = useState<boolean>(false);
  const [reply, setReply] = useState<string>("");

  const sendReply = async (
    e: FormEvent<HTMLFormElement>,
    commentId: string
  ) => {
    e.preventDefault();
    if (!reply) return alert("Balasan tidak boleh kosong");
    if (!email) return alert("Anda harus login terlebih dahulu");
    try {
      const response = await fetch(
        `/api/berita/${newsId}/komentar/${commentId}`,
        {
          method: "POST",
          body: JSON.stringify({ message: reply, email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (!response.ok) throw Error(data.message);

      alert("Balasan berhasil dikirim");
      location.reload();
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;
        alert(errorMessage);
      }
    }
    setReply("");
    setIsReply(false);
  };
  return (
    <div className="p-5 rounded-[20px] bg-[#F2F2F2] flex flex-col justify-between">
      <div className="flex flex-row-reverse w-full">
        <span className="flex gap-2 w-fit">
          <Image src="/icons/lapor.svg" width={28} height={24} alt="lapor" />
          <p className="text-base font-semibold">Laporkan</p>
        </span>
      </div>
      <div className="flex gap-4 items-start">
        <Image
          src="/icons/avatar.svg"
          width={50}
          height={50}
          alt="avatar"
          className="w-[50px] h-auto object-contain"
        />
        <div>
          <span className="mb-2 flex sm:flex-row flex-col gap-2 sm:items-center ">
            <h1 className="text-lg font-semibold">{comment?.username}</h1>
            <span className="flex items-center gap-2">
              <Image
                src="/icons/clock.svg"
                width={12}
                height={12}
                alt="clock"
              />
              <p className="text-sm">
                {new Date(comment?.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "Asia/Jakarta",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </p>
            </span>
          </span>
          <p className="mb-5 font-medium text-base">{comment?.comment}</p>
          <div className="flex gap-20">
            <div
              onClick={() => setIsReply(true)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Image
                src="/icons/reply.svg"
                alt="like"
                width={50}
                height={50}
                className="w-6 h-6 object-contain"
              />
              <button type="button" className="font-bold">
                Balas
              </button>
            </div>
          </div>
          <form
            onSubmit={(e) => sendReply(e, comment?.id)}
            className={`p-5 flex flex-col gap-3 ${
              isReply ? "block" : "hidden"
            }`}
          >
            <textarea
              name="reply"
              id="reply"
              cols={30}
              rows={10}
              onChange={(e) => setReply(e.target.value)}
              value={reply}
              className="bg-neutral-800/20 p-5 rounded-[20px] w-full h-[100px] placeholder:text-neutral-800 outline-none resize-none"
              placeholder="Tulis Balasan Anda....."
            />
            <div className="flex flex-row-reverse gap-3">
              <button
                type="submit"
                className="py-2.5 px-5 rounded-[10px] bg-blue_primary text-white font-bold hover:brightness-110 transition-all"
              >
                Kirim
              </button>
              <button
                onClick={() => setIsReply(false)}
                className="py-2.5 px-5 rounded-[10px] bg-[#B60000] text-white font-bold hover:brightness-110 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
          {comment?.commentChild &&
            comment?.commentChild.map((child: Comment, id) => (
              <div
                key={id}
                className="p-5 my-3 shadow-sm rounded-[20px] gap-4 bg-white flex items-start"
              >
                <Image
                  src="/icons/avatar.svg"
                  width={50}
                  height={50}
                  alt="avatar"
                  className="w-[36px] h-auto object-contain"
                />
                <div>
                  <span className="flex sm:flex-row flex-col gap-2 sm:items-center ">
                    <h1 className="text-sm font-semibold">{child?.username}</h1>
                    <span className="flex items-center gap-2">
                      <Image
                        src="/icons/clock.svg"
                        width={12}
                        height={12}
                        alt="clock"
                      />
                      <p className="text-xs">
                        {new Date(child?.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          timeZone: "Asia/Jakarta",
                          hour: "numeric",
                          minute: "numeric",
                        })}
                      </p>
                    </span>
                  </span>
                  <p className="font-medium text-base">{child?.comment}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
