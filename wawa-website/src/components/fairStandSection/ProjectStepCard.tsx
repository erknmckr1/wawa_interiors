type ProjectStepCardProps = {
  step: string;
  title: string;
  highlight: string;
  icon: string; // ikon yolu
  badgeText?: string; // opsiyonel, sadece bazı kartlar için
};
import Image from "next/image";
export default function ProjectStepCard({
  step,
  title,
  highlight,
  icon,
  badgeText,
}: ProjectStepCardProps) {
  console.log(icon);
  return (
    <div
      className={`relative z-20 border border-333354-color p-4 w-full h-full flex flex-col items-center justify-between ${
        badgeText ? "bg-secondary hover:bg-secondary-light transtion-all duration-200" : ""
      }`}
    >
      {/* Step No */}
      <div className=" absolute right-2 text-sm font-bold bg-primary text-[#141425] px-2 py-1 w-fit">
        {step}
      </div>

      {/* Icon */}
      <Image
        src={icon}
        alt="icon"
        width={30}
        height={30}
        className="w-12 h-12 mt-4"
      />

      {/* Başlık */}
      <p className="mt-4 font-semibold text-lg">
        {title} <span className="text-primary font-bold">{highlight}</span>
      </p>
      {/* Play Video Badge */}
      {badgeText && (
        <span className="absolute top-2 -right-8 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
          {badgeText}
        </span>
      )}
    </div>
  );
}
