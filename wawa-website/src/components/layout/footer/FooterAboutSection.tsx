import Image from "next/image";

export default function FooterAboutSection() {
  const socialIcons = [
    
    { src: "/icons/twitter.svg", alt: "Twitter", href: "#" },
    { src: "/icons/pinterest.svg", alt: "Pinterest", href: "#" },
    { src: "/icons/linkedin.svg", alt: "LinkedIn", href: "#" },
  ];
  return (
    <div className="space-y-6">
      {/* Logo */}
      <div className="">
        <Image
          src="/images/logo.png"
          alt="WAWA Interiors Logo"
          width={200}
          height={60}
          priority
        />
      </div>
      {/* Açıklama */}
      <p className="text-sm  text-white leading-relaxed">
        Wawa iç mimarlık ofisi; tasarımın farklı bir yetisi olduğuna inanan,
        işlevselliği ve mekan içerisindeki etkileşimi önemseyen İstanbul konumlu
        iç mimarlık ofisidir. İçmimarlık; dekorasyondan ibaret değildir.
      </p>
      {/* Sosyal Medya */}
      <div className="flex gap-3">
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="w-8 h-8 bg-dark-blue-light hover:bg-primary rounded-full flex items-center justify-center  transition-colors"
          >
            <Image src={item.src} alt={item.alt} width={16} height={16} />
          </a>
        ))}
      </div>
    </div>
  );
}
