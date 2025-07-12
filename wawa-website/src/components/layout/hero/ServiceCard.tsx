import Image from "next/image";
interface ServiceCardProps {
  icon: string;
  title: string;
  highlight: string;
}

const ServiceCard = ({ icon, title, highlight }: ServiceCardProps) => {
  return (
    <div className="flex-1 md:px-6 py-6 flex flex-col justify-between border-l-2 border-secondary bg-dark-blue ">
      {/* İkon */}
      <Image width={40} height={40} src={`${icon}`} alt={title} className="w-10 h-10 mb-4" />

      {/* Başlık */}
      <h3 className="text-base font-extrabold leading-tight">
        {title} <br />
        <span className="text-primary">{highlight}</span>
      </h3>

      {/* Buton */}
      <button className="md:mt-4 px-4 py-2 border border-white text-xs font-medium hover:bg-white hover:text-dark-blue transition w-fit">
        Projeleri İncele
      </button>
    </div>
  );
};

export default ServiceCard;
