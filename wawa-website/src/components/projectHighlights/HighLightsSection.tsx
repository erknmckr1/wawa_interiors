import HighlightsCard from "./HighLightsCard";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const highlightProjects = [
  {
    image: "/images/ProjectHighlight/highlight1.png",
    category: "Mutfak Tasarımı",
    year: "2022",
    title: "Acarkent Özel Villa Tasarım & Uygulama",
    href: "/images/ProjectHighlight/highlight1.png",
  },
  {
    image: "/images/ProjectHighlight/highlight1.png",
    category: "Mağaza Tasarımı",
    year: "2023",
    title: "MANO Teknoloji Mağazası",
    href: "/images/ProjectHighlight/highlight1.png",
  },
  {
    image: "/images/ProjectHighlight/highlight1.png",
    category: "Peyzaj Tasarımı",
    year: "2023",
    title: "Botanik Bahçe Projesi",
    href: "/images/ProjectHighlight/highlight1.png",
  },
];

export default function HighlightsSection() {
  return (
    <section className="w-full py-12 px-2 sm:px-6 md:px-8 relative ">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 sm:mb-8 gap-4">
          {/* Sol başlık kısmı */}
          <div className="flex gap-x-4 items-center">
            <Image
              src={"/images/ProjectHighlight/hlicon.svg"}
              alt="Highlights Icon"
              width={80}
              height={80}
            />
            <div>
              <p className="text-primary font-semibold text-sm sm:text-base">
                WAWA İÇ MİMARLIK
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-white">
                Öne Çıkan Projelerimiz
              </h2>
            </div>
          </div>

          {/* Sağ butonlar */}
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-313159 border border-white/20 text-white hover:bg-primary transition">
              <ArrowLeft size={16} />
            </button>
            <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-313159 border border-white/20 text-white hover:bg-primary transition">
              <ArrowRight size={16} />
            </button>
            <Link
              href="/projects"
              className="bg-primary text-secondary px-3 py-2 sm:px-4 sm:py-2 flex items-center gap-2 font-semibold text-sm hover:bg-primary/80 transition"
            >
              <LayoutGrid size={16} />
              Tüm Projeleri İncele
            </Link>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightProjects.map((project, i) => (
            <HighlightsCard key={i} {...project} />
          ))}
        </div>
      </div>
      <Image
        src={"/images/ProjectHighlight/highlightsbg.png"}
        alt="Highlights Background"
        width={500}
        height={500}
        className="absolute left-0 top-0 -z-10"
      />
    </section>
  );
}
