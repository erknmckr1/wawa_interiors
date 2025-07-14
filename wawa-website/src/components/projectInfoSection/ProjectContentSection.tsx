import FairStandSectionWrapper from "../fairStandSection/FairStandSectionWrapper";
import ProjectFlow from "../fairStandSection/ProjectFlow";
import FairStandIntro from "../fairStandSection/FairStandIntro";
export default function ProjectContentSection() {
  return (
    <FairStandSectionWrapper
      leftContent={   <ProjectFlow
                heading="# İÇ MİMARLIK"
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
              />}
      rightContent={
        <FairStandIntro
          heading="# WAWA İÇ MİMARLIK OFİSİ"
          title="İç Mimarlık Hizmetleri"
          paragraphs={[
            "Mimarlık süreçleri dekoratif çözümler ve şık sonuçlar elde etmek amacıyla dikkat çeken süreçleri ifade etmektedir. Bu kapsamda önemli olan hizmetin kalitesi olsa da amaç daima daha iyiye elde etmek ve yaşam alanında profesyonel bir dokunuşun varlığını hissettirmektir.",
            "Hizmet kalitesini öne çıkarırken aynı zamanda çözüm odaklı bir anlayışı da benimseyen iç mimarlar için her alanı optimum verimlilikle değerlendirmek önemlidir. Böylelikle ortaya çıkan sonuç herkesi tatmin edecek bir seçenek olarak kabul edilmektedir.",
          ]}
          accordionItems={[
            {
              title: "İç Mimarlık Neden Tercih Edilmektedir?",
              content:
                "İç mimarlık yaşam alanlarını estetik ve işlevsel hale getirmek için tercih edilmektedir. Fonksiyonel çözümlerle mekanlar hem daha yaşanabilir hem de daha özgün hale gelir.",
            },
            {
              title: "Mağaza Tasarımı Hakkında Bilinmesi Gerekenler",
              content:
                "Pazarlanan ürünler mağaza dışı vitrinlerde ve mağaza içi vitrinlerde herkesin rahatça görebileceği şekilde sergilenmelidir. Ürünleri sergilerken ürünlerin açıları, vitrin aydınlatması, sektöre göre oluşturulan kombinler markanıza uygun tasarlanmalıdır. Mağaza tasarımında, her faktör markaya ve ürüne özel olmalıdır.",
            },
            {
              title: "İç Mimarlık Neden Tercih Edilmektedir?",
              content:
                "İç mimarlık hizmetleri sadece estetik değil aynı zamanda verimliliği de artıran çözümler sunar. Konforlu, ergonomik ve marka imajına uygun alanlar için tercih edilir.",
            },
            {
              title: "Mağaza Tasarımı Hakkında Bilinmesi Gerekenler",
              content:
                "Mağaza tasarımında müşteri deneyimi, sirkülasyon, ürün sunumu ve aydınlatma gibi unsurlar öne çıkar. Tüm bu detaylar markanın algısını doğrudan etkiler.",
            },
          ]}
          buttonText="Proje Teklifi Alın!"
        />
      }
      backgroundImage="/images/fairstandintro/fair.png"
    />
  );
}
