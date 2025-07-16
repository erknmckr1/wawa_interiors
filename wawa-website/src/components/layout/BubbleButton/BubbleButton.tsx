// components/FloatingIconButton.tsx
import Link from "next/link";
import Image from "next/image";

type BubbleButtonProps = {
  iconSrc?: string;
  href?: string;
  size?: number;
  bgColor?: string;
  position?: string;
  alt?: string;
};

export default function BubbleButton({
  iconSrc = "/icons/wpicon.png",
  href = "/",
  size = 40,
  bgColor = "bg-white",
  position = "bottom-4 right-4",
  alt = "Icon Button",
}: BubbleButtonProps) {
  return (
    <div className={`fixed ${position} z-50`}>
      <Link
        href={href}
        className={`flex items-center justify-center rounded-full shadow-lg transition-colors ${bgColor}`}
        style={{ width: size, height: size }}
        aria-label={alt}
      >
        <Image src={iconSrc} alt={alt} width={size * 0.6} height={size * 0.6} />
      </Link>
    </div>
  );
}
