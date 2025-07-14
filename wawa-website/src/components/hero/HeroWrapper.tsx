"use client";
import HeroLeft from "./HeroLeft";
import HeroServices from "./HeroServices";
import HeroIcons from "./HeroIcons";
import HeroSliderIndicator from "./HeroSliderIndicator";
import FadeInSection from "@/components/ui/FadeInSection";
const HeroWrapper = () => {
  return (
    <FadeInSection>
      <section className="relative w-full h-auto   lg:h-[800px]">
        {/* Arka plan + koyu mavi overlay */}
        <div
          className="absolute inset-0 w-full h-full  bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        >
          <div className="absolute inset-0 bg-[#0C0F1F]/70 " />
        </div>

        {/* İçerikler */}

        <div className="relative container flex flex-col lg:flex-row justify-between items-center w-full mx-auto py-12 h-auto lg:h-[800px]">
          <FadeInSection>
            <HeroLeft />
          </FadeInSection>
          <HeroSliderIndicator />
          <HeroIcons />
        </div>

        <HeroServices />
      </section>
    </FadeInSection>
  );
};

export default HeroWrapper;
