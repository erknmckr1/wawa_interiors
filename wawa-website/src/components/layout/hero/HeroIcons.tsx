import Image from "next/image";
interface SocialIcon {
  src: string;
  alt: string;
}

const icons: SocialIcon[] = [
  { src: "/icons/facebook.svg", alt: "facebook" },
  { src: "/icons/instagram.svg", alt: "instagram" },
  { src: "/icons/pinterest.svg", alt: "pinterest" },
  { src: "/icons/twitter.svg", alt: "twitter" },
  { src: "/icons/linkedin.svg", alt: "linkedin" },
];

export default function HeroIcons() {
  return (
    <div className="absolute  right-0 top-20 md:top-auto  md:bottom-0 md:left-0 flex flex-col sm:flex-row sm:items-center gap-6 text-sm tracking-widest pl-2">
      <span className="text-gray-300 uppercase hidden md:block">Takip Edin :</span>

      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
        {icons.map((icon) => (
          <div
            key={icon.alt}
            className="hover:bg-primary  transition-colors duration-200 sm:py-4 py-1 px-1"
          >
            <Image
              width={16}
              height={16}
              src={icon.src}
              alt={icon.alt}
              className="w-4 h-4 opacity-80"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
