const HeroSliderIndicator = () => {
  const totalSlides = 5;
  const currentSlide = 2; // Aktif slide index (1 tabanlı)

  return (
    <div className="flex justify-end items-center sm:mb-30  sm:h-full sm:w-1/3  left-0">
      <div className=" flex sm:flex-col items-center gap-4  text-white ">
        {/* Başlık */}
        <div className="text-center">
          <div className="text-3xl md:text-5xl font-extrabold">
            <span className="text-primary">1</span>
            <span>/3</span>
          </div>
          <div className="w-16 h-1 bg-primary mt-2" />
        </div>

        {/* Noktalar */}
        <div className="flex sm:flex-col gap-2 sm:mt-4">
          {Array.from({ length: totalSlides }, (_, i) => (
            <div
              key={i}
              className={`w-4 h-4 md:w-6 md:h-6 rounded-full ${
                i + 1 === currentSlide
                  ? "border border-white bg-transparent"
                  : "bg-[#B2A89F]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSliderIndicator;
