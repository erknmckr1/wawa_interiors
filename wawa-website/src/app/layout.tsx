// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer/Footer";
import BubbleButton from "@/components/layout/BubbleButton/BubbleButton";
export const metadata: Metadata = {
  title: "WAWA Interiors | Modern İç Mimarlık ve Proje Tasarımı",
  icons: {
    icon: "/icons/favicon.ico",
  },
  description:
    "İç mimarlık, fuar standı ve uygulama projeleriyle yaşam alanlarınıza modern çözümler sunuyoruz. WAWA Interiors ile estetiği fonksiyonla buluşturun.",
  keywords: [
    "iç mimarlık",
    "mimari tasarım",
    "fuar standı",
    "uygulama projeleri",
    "modern yaşam alanları",
    "WAWA Interiors",
  ],
  authors: [{ name: "WAWA Interiors", url: "https://wawainteriors.com" }],
  creator: "WAWA Interiors",
  publisher: "WAWA Interiors",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://wawainteriors.com",
    siteName: "WAWA Interiors",
    title: "WAWA Interiors | Modern İç Mimarlık",
    description:
      "İç mimarlık ve uygulama projelerinde kusursuz çözümler. WAWA Interiors ile yaşam alanınızı yeniden keşfedin.",
    images: [
      {
        url: "https://wawainteriors.com/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "WAWA Interiors Kapak Görseli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@wawainteriors",
    title: "WAWA Interiors | Modern İç Mimarlık",
    description:
      "Kusursuz tasarımlar, fonksiyonel yaşam alanları. WAWA Interiors ile tanışın.",
    images: ["https://wawainteriors.com/og-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen relative bg-dark-blue">
        <Header />
        {children}
        <Footer />
        <BubbleButton
          iconSrc="/icons/wpicon.png"
          href="https://wa.me/905050054134"
          size={60}
          bgColor="bg-green-500 hover:bg-green-600"
          position="bottom-6 right-6"
          alt="WhatsApp ile iletişime geç"
        />
        <BubbleButton
          iconSrc="/icons/formicons/blackphone.svg"
          href="tel:+905050054134"
          size={60}
          bgColor="bg-lime-400"
          position="bottom-24 right-6"
          alt="Telefonla ara"
        />
      </body>
    </html>
  );
}
