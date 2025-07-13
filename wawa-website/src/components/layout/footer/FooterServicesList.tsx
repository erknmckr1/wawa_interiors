import Link from "next/link";

export default function FooterServicesList() {
  const services = [
    "Fuar Standı Tasarımı Ve Uygulama",
    "Cafe & Restaurant Tasarımı",
    "Klinik Tasarımı",
    "Konut & Villa Tasarımı",
    "Mağaza Tasarımı",
    "Ofis Tasarımı",
  ];
  return (
    <div className="flex flex-col md:items-center md:justify-center">
      <div className="space-y-6">
        <h4 className="font-bold text-white text-lg md:text-xl">Hizmetlerimiz</h4>
        <ul className="space-y-2">
          {services.map((item, index) => (
            <li  key={index}>
              <Link href={"#"} className="text-sm hover:text-primary hover:border-b text-white transition-colors">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
