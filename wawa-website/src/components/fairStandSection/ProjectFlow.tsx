import ProjectStepCard from "./ProjectStepCard";

type Step = {
  step: string;
  title: string;
  highlight: string;
  icon: string;
  badgeText?: string;
};

type ProjectFlowProps = {
  heading: string;
  title: string;
  steps: Step[];
  backgroundImage?: string;
};

export default function ProjectFlow({
  heading,
  title,
  steps,
  backgroundImage = "/images/fairstandintro/projectFlow.png",
}: ProjectFlowProps) {
  return (
    <div className="md:w-1/2 text-white px-6 py-8 md:py-8 relative">
      {/* Arka plan görseli */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Siyah yarı şeffaf katman */}
      <div className="absolute inset-0 z-10 bg-black/20" />

      {/* Başlıklar */}
      <div className="relative z-20 p-6">
        <p className="text-primary text-[25px] font-semibold">{heading}</p>
        <h2 className="text-[32px] md:text-[55px]">{title}</h2>
      </div>

      {/* Kartlar */}
      <div className="grid grid-cols-2 gap-10 mt-6 relative z-20">
        {steps.map((step, index) => (
          <ProjectStepCard key={index} {...step} />
        ))}
      </div>
    </div>
  );
}