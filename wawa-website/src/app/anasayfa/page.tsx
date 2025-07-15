import HeroWrapper from "@/components/hero/HeroWrapper";
import ComponyIntroSection from "@/components/companyIntro/CompanyIntroSection";
import ContactSectionWrapper from "@/components/contactSection/ContactSectionWrapper";
import FairContent from "@/components/fairStandSection/FairContent";
import ProjectContentSection from "@/components/projectInfoSection/ProjectContentSection";
import HighlightsSection from "@/components/projectHighlights/HighLightsSection";
import PromoCardSection from "@/components/PromoCardSection/PromoCardSection";
import BrandSliderSection from "@/components/BrandSlider/BrandSliderSection";
export default function Home() {
  return (
    <div>
      <HeroWrapper />
      <ComponyIntroSection />
      <ContactSectionWrapper />
      <ProjectContentSection />
      <PromoCardSection />
      <FairContent />
      <BrandSliderSection />
      <HighlightsSection/>
    </div>
  );
}
