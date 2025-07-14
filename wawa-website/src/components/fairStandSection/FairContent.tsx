import FairStandSectionWrapper from "./FairStandSectionWrapper";
import ProjectFlow from "./ProjectFlow";
import FairStandIntro from "./FairStandIntro";
export default function Content() {
  return (
    <FairStandSectionWrapper
      leftContent={
        <FairStandIntro
          heading="# YURTİÇİ VE YURTDIŞI FUAR STANDI"
          title="Fuar Standı Tasarımı ve Uygulama"
          paragraphs={[
            "Fuar stand tasarımı konusunda Wawa İç mimarlık olarak yurtiçi ve yurtdışı katılım sağladığınız fuarlar da kreatif ve zamanında teslimatı önemseyen iç mimarlık ofisidir.",
            "Fuar standı konusunda sizlere verdiğimiz hizmetin uzun soluklu bir marka dostluğunun başlangıcı olmasını diliyoruz.",
          ]}
          accordionItems={[
            {
              title: "Fuar Standı Yapan Firmalar",
              content:
                "Pazarlanan ürünler mağaza dışı vitrinlerde ve mağaza içi vitrinlerde...",
            },
            {
              title: "Uluslararası Fuar Stand Kurulumu",
              content: "Kurulum sırasında dikkat edilmesi gereken unsurlar...",
            },
            {
              title: "Uluslararası Fuar Stand Kurulumu",
              content: "Kurulum sırasında dikkat edilmesi gereken unsurlar...",
            },
          ]}
          buttonText="Proje Teklifi Alın!"
        />
      }
      rightContent={
        <ProjectFlow
          heading="# FUAR STANDI"
          title="Proje İş Akışı"
          backgroundImage="/images/fairstandintro/projectFlow.png"
          steps={[
            {
              step: "01",
              title: "Talepleri",
              highlight: "Dinleme",
              icon: "/icons/procectFlows/p1.svg",
            },
            {
              step: "02",
              title: "Proje",
              highlight: "Keşif",
              icon: "/icons/procectFlows/p2.svg",
            },
            {
              step: "03",
              title: "Talepleri",
              highlight: "Tasarımı",
              icon: "/icons/procectFlows/p2.svg",
            },
            {
              step: "04",
              title: "Proje",
              highlight: "Fiyatlandırma",
              icon: "/icons/procectFlows/p1.svg",
            },
            {
              step: "05",
              title: "Mimari",
              highlight: "Uygulama",
              icon: "/icons/procectFlows/p2.svg",
            },
            {
              step: "",
              title: "Proje",
              highlight: "Sürecimiz",
              icon: "/icons/procectFlows/play.svg",
              badgeText: "Play Video",
            },
          ]}
        />
      }
      backgroundImage="/images/fairstandintro/fair.png"
    />
  );
}
