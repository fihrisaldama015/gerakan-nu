"use client";
import { Comment } from "@/types/comment";
import Image from "next/image";
import { FormEvent, useState } from "react";

type CommentProps = {
  data: Comment;
};

function CommentCard({ data }: CommentProps) {
  const [isReply, setIsReply] = useState<boolean>(false);
  const [reply, setReply] = useState<string>("");

  const sendReply = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("reply submitted");
    console.log("reply => ", reply);
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
            <h1 className="text-lg font-semibold">{data.username}</h1>
            <span className="flex items-center gap-2">
              <Image
                src="/icons/clock.svg"
                width={12}
                height={12}
                alt="clock"
              />
              <p className="text-sm">
                {new Date(data.date).toLocaleDateString("id-ID", {
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
          <p className="mb-5 font-medium text-base">{data.comment}</p>
          <div className="flex gap-20">
            {/* <div className="flex items-center gap-2">
              <Image
                src="/icons/like.svg"
                alt="like"
                width={50}
                height={50}
                className="w-6 h-6 object-contain"
              />
              <span
                className={`text-xl font-bold ${
                  data.likes > 0 ? "text-blue_primary" : "text-neutral-900"
                }`}
              >
                {data.likes}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/dislike.svg"
                alt="like"
                width={50}
                height={50}
                className="w-6 h-6 object-contain"
              />
              <span className="text-xl font-bold text-neutral-900">
                {data.dislikes}
              </span>
            </div> */}
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
            onSubmit={sendReply}
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
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
