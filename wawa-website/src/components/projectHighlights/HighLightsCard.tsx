import Image from "next/image";
import Link from "next/link";

type HighlightsCardProps = {
  image: string;
  category: string;
  year: string;
  title: string;
  href: string;
};

export default function HighlightsCard({
  image,
  category,
  year,
  title,
  href,
}: HighlightsCardProps) {
  return (
    <div className="relative group w-full h-full overflow-hidden">
      {/* Background image */}
      <div className="relative  sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3] aspect-[5/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-primary/50 transition duration-300" />
      </div>

      {/* Top badge area */}
      <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10 gap-2">
        <span className="bg-secondary text-white text-xs lg:text-sm font-medium px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-3">
          {category}
        </span>
        <Link
          href={href}
          className="bg-primary text-secondary text-xs lg:text-sm font-bold px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-3 hover:underline whitespace-nowrap"
        >
          Projeyi İncele
        </Link>
      </div>

      {/* Bottom title area */}
      <div className="absolute bottom-3 left-3 z-10 text-white">
        <p className="text-[10px] md:text-xs mb-1">Yapım Yılı: {year}</p>
        <h3 className="text-sm md:text-base leading-tight">{title}</h3>
      </div>
    </div>
  );
}
