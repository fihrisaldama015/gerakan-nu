"use client";

import { FormEvent, useState } from "react";

function CommentForm({ newsId, email }: { newsId: string; email: string }) {
  const [message, setMessage] = useState<string>("");

  const handlePostComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ message, newsId, email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) throw Error(data.message);

      alert(data.message);
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;
        alert(errorMessage);
      }
    }
    setMessage("");
  };
  return (
    <form onSubmit={handlePostComment} className="flex flex-col gap-2">
      <textarea
        name="comment"
        id="comment"
        cols={30}
        rows={10}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tulis Komentar Anda Disini....."
        className="p-5 h-[120px] rounded-[10px] ring-1 ring-neutral-800 placeholder:text-neutral-800 text-lg"
      />
      <b>
        *Note : Tetap Berkomentar dengan bijaksana dan bertanggung jawab, sesuai
        dengan yang diatur di dalam UU ITE
      </b>
      <div className="flex flex-row-reverse">
        <button
          type="submit"
          disabled={!email || !message}
          className="bg-blue_primary hover:brightness-110 px-[30px] py-2.5 rounded-[10px] font-bold text-white transition-all disabled:cursor-not-allowed"
        >
          Kirim
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
