    // components/promo-card-section/PromoCardSection.tsx
    import PromoCard from "./PromoCard";

    export default function PromoCardSection() {
    return (
        <div className="container mx-auto flex md:flex-row flex-col gap-6 py-10 px-4">
        <PromoCard
            title="Türkiye’de 25. Senemiz!"
            subtitle=""
            imageUrl="/images/tr.png"
            buttonLabel="Bizi Tanıyın!"
            className="bg-primary"
            titleClassName="text-secondary"
            buttonClassName="mt-4 md:mt-6 bg-secondary text-white text-xs font-bold px-4 py-4 shadow-lg flex items-center gap-2 w-fit text-lg hover:bg-secondary-light"
            subTitleClassName="text-secondary"
            iconClassName="text-white"
            iconUrl="/icons/pusula_white.svg"
            
        />
        <PromoCard
            title="Uluslararası"
            subtitle="Hizmet."
            imageUrl="/images/world.png"
            buttonLabel="Bizi Tanıyın!"
            className="bg-3E3E5A"
            titleClassName="text-primary"
            buttonClassName="mt-4 md:mt-6 bg-primary text-secondary text-xs font-bold px-4 py-4  shadow-lg flex items-center gap-2 w-fit text-lg hover:bg-primary-light"
            subTitleClassName="text-white"
            iconClassName=""
            iconUrl="/icons/pusula.svg"
        />
        </div>
    );
    }
