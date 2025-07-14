import HeroWrapper from "@/components/layout/hero/HeroWrapper";
import ComponyIntroSection from "@/components/layout/companyIntro/CompanyIntroSection";
import ContactSectionWrapper from "@/components/contactSection/ContactSectionWrapper";
import FairContent from "@/components/fairStandSection/FairContent";
import ProjectContentSection from "@/components/projectInfoSection/ProjectContentSection";
export default function Home() {
  return (
    <div>
      <HeroWrapper />
      <ComponyIntroSection />
      <ContactSectionWrapper />
      <ProjectContentSection />
      <FairContent />
    </div>
  );
}
