import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  index: number;
  imgUrl: string;
  title: string;
  date: string;
  tags: string;
};

function NewsCard({ index, imgUrl, title, date, tags }: NewsCardProps) {
  return (
    <div className="flex flex-col gap-4 max-w-[400px]">
      <Image
        src={imgUrl}
        width={400}
        height={244}
        alt="post_image"
        className="h-auto w-auto object-cover"
      />
      <div>
        <p className="text-neutral-600 font-semibold tracking-tight text-xl">
          {tags} | {date}
        </p>
        <p className="text-[22px] text-neutral-950 font-semibold tracking-tight">
          {title}
        </p>
      </div>
      <Link
        href={`/news/${index}`}
        className="text-blue_primary font-bold text-xl"
      >
        SELENGKAPNYA
      </Link>
    </div>
  );
}

export default NewsCard;
