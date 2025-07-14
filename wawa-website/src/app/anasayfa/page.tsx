import HeroWrapper from "@/components/layout/hero/HeroWrapper";
import ComponyIntroSection from "@/components/layout/companyIntro/CompanyIntroSection";
import ContactSectionWrapper from "@/components/contactSection/ContactSectionWrapper";
import FairStandSectionWrapper from "@/components/fairStandSection/FairStandSectionWrapper";
export default function Home() {
  return (
    <div>
      <HeroWrapper />
      <ComponyIntroSection />
      <ContactSectionWrapper />
      <FairStandSectionWrapper />
    </div>
  );
}
