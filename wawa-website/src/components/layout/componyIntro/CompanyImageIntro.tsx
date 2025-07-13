import Image from "next/image";

export default function CompanyImageIntro() {
  return (
    <div className="w-full max-w-[580px]  px-4 md:px-0">
      {/* Mobile layout */}
      <div className="flex flex-col gap-4 md:hidden">
        <Image
          src="/images/companyGallery/company1.png"
          alt="Şehir manzarası"
          width={600}
          height={300}
          className="rounded-md hidden w-full object-cover"
        />

        <Image
          src="/images/companyGallery/company2.png"
          alt="Modern ahşap ev"
          width={600}
          height={300}
          className="rounded-md w-full object-cover"
        />

        <div className="bg-primary rounded-full w-48 h-48 flex items-center justify-center mx-auto">
          <Image
            src="/icons/favicon.ico"
            alt="WAWA Interiors Logo"
            width={100}
            height={100}
          />
        </div>

        <Image
          src="/images/companyGallery/company3.png"
          alt="Lüks villa"
          width={600}
          height={300}
          className="rounded-md w-full object-cover"
        />

        <Image
         src="/images/companyGallery/company3.png"
          alt="Peyzaj yolu"
          width={600}
          height={300}
          className=" hidden rounded-md w-full object-cover"
        />
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block relative h-[500px]">
        {/* Sol üst */}
        <Image
          src="/images/companyGallery/company1.png"
          alt="Şehir manzarası"
          width={245}
          height={230}
          className="absolute top-10 left-0 rounded-md"
        />

        {/* Sağ üst */}
        <Image
          src="/images/companyGallery/company2.png"
          alt="Modern ahşap ev"
          width={290}
          height={274}
          className="absolute top-0 right-0 rounded-md"
        />

        {/* Sol alt */}
        <Image
          src="/images/companyGallery/company3.png"
          alt="Lüks villa"
          width={190}
          height={160}
          className="absolute bottom-0 left-16 rounded-md"
        />

        {/* Sağ alt */}
        <Image
          src="/images/companyGallery/company3.png"
          alt="Peyzaj yolu"
          width={245}
          height={195}
          className="absolute bottom-0 right-10 rounded-md"
        />

        {/* Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-2 z-10">
          <div className="text-secondary rounded-full w-60 h-60 flex items-center justify-center flex-col font-bold text-lg shadow-xl border-2 border-white">
            <Image
              alt="WAWA Interiors Logo"
              src="/icons/favicon.ico"
              width={150}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
