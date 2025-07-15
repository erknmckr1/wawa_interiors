// components/promo-card-section/PromoCard.tsx
import Image from "next/image";
type PromoCardProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonLabel: string;
  className?: string;
  titleClassName?: string;
  buttonClassName?: string;
  subTitleClassName?: string;
  iconClassName?: string;
  iconUrl?: string;
};

export default function PromoCard({
  title,
  subtitle,
  imageUrl,
  buttonLabel,
  className = "",
  titleClassName = "",
  buttonClassName = "",
  subTitleClassName = "",
  iconClassName = "",
  iconUrl = "",
}: PromoCardProps) {
  return (
    <div
      className={`flex w-full md:w-1/2 md:min-h-[300px] md:px-12 p-6 md:py-12 text-white relative ${className}`}
    >
      <div className="z-10 md:w-[40%] flex flex-col justify-between">
        <div>
          <p
            className={`md:text-md text-xs uppercase font-semibold tracking-wide mb-2 ${subTitleClassName}`}
          >
            # WAWA İÇ MİMARLIK
          </p>
          <h3
            className={`text-[30px] md:text-[40px] leading-tight ${titleClassName}`}
          >
            {title}
          </h3>
          <h4
            className={`text-[30px] md:text-[40px]  text-accent ${titleClassName}`}
          >
            {subtitle}
          </h4>
        </div>
        <button className={`${buttonClassName}`}>
          <Image
            src={iconUrl}
            alt="Pusula Icon"
            width={24}
            height={24}
            className={`${iconClassName}`}
          />{" "}
          {buttonLabel}
        </button>
      </div>

      <div className="relative z-0 w-full md:w-[60%]  md:h-auto flex items-end justify-end">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="absolute object-cover md:object-contain pointer-events-none"
        />
      </div>
    </div>
  );
}
