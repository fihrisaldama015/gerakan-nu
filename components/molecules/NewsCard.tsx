import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  index: string;
  dokumentasi: Dokumentasi[];
  title: string;
  date: string;
  horizontal?: true;
  description?: string;
};

function NewsCard({
  index,
  dokumentasi,
  title,
  date,
  horizontal,
  description,
}: NewsCardProps) {
  return (
    <div
      className={`flex ${
        horizontal ? "flex-row-reverse" : "flex-col max-w-[400px]"
      } gap-4 `}
    >
      <div className={`${horizontal ? "md:w-[600px]" : ""}`}>
        <Image
          src={dokumentasi[0].url}
          width={400}
          height={244}
          alt="post_image"
          className="h-auto w-full object-cover"
        />
      </div>
      <div className={`${horizontal ? "flex flex-col flex-1 gap-6" : ""}`}>
        <div className={`flex flex-col ${horizontal ? "gap-7" : "gap-3"}`}>
          <p className="text-neutral-600 font-semibold tracking-tight text-xl">
            {horizontal ? date : `BERITA | ${date}`}
          </p>
          <p
            className={`${
              horizontal ? "text-4xl" : "text-[22px]"
            } text-neutral-950 font-semibold tracking-tight`}
          >
            {title}
          </p>
          {horizontal && (
            <div
              className="text-xl text-neutral-800 text-justify line-clamp-3 text-ellipsis overflow-hidden"
              style={{ lineHeight: "1.5em" }}
              dangerouslySetInnerHTML={{ __html: description! }}
            ></div>
          )}
        </div>
        <Link
          href={`/berita/${index}`}
          className="text-blue_primary font-bold text-xl"
        >
          SELENGKAPNYA
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
