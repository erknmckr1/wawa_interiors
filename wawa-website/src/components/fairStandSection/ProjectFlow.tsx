import ProjectStepCard from "./ProjectStepCard";
export default function ProjectFlow() {
  const steps = [
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
      badgeText: "Play Video", // sadece bu karta özel
    },
  ];
  return (
    <div className="md:w-1/2 text-white px-6 py-6 md:py-0 relative">
      {/* Arka plan görseli */}
      <div className="absolute inset-0 z-0 bg-[url('/images/fairstandintro/projectFlow.png')] bg-no-repeat bg-contain bg-center" />

      {/* Siyah yarı şeffaf katman */}
      <div className="absolute inset-0 z-10  bg-black/20" />

      {/* İçerik */}
      <div className="relative z-20 p-6">
        <p className="text-primary text-[25px] font-semibold"># FUAR STANDI</p>
        <h2 className="text-[32px] md:text-[55px]">Proje İş Akışı</h2>
      </div>

      {/* project card */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {steps.map((step, index) => (
          <ProjectStepCard key={index} {...step} />
        ))}
      </div>
    </div>
  );
}
