import Link from "next/link";
export default function FooterMenüList() {
  const menuItems = [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Blog", href: "/blog" },
    { label: "Kariyer", href: "/kariyer" },
    { label: "İletişim", href: "/iletisim" },
  ];
  return (
  
     <div className="space-y-6 ">
         <h4 className="font-bold text-white  text-xl">Menü</h4>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="text-sm text-white transition-colors hover:text-primary hover:border-b"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
     </div>

  );
}
