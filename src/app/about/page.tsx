import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Company Profile Website",
};

const page = () => {
  const testimonials = [
    {
      quote: "Our History",
      name: "NusantaraKitchen didirikan dengan visi untuk menghadirkan kelezatan kuliner Nusantara ke seluruh penjuru dunia. Berawal dari kecintaan terhadap masakan tradisional Indonesia, perusahaan ini lahir sebagai upaya untuk melestarikan dan memperkenalkan ragam cita rasa khas Nusantara dengan sentuhan modern.",
    },
    {
      quote: "Milestones & Achievements",
      name: `1999: NusantaraKitchen resmi didirikan dengan fokus pada kuliner otentik Indonesia.
2003: Membuka cabang pertama di DI Yogyakarta.
2005: Meluncurkan menu inovatif yang menggabungkan tradisi dan tren modern dalam industri F&B.
2016: Meraih penghargaan [Nama Penghargaan] atas kontribusi dalam mempromosikan kuliner Nusantara.
Saat Ini: NusantaraKitchen terus berkembang dengan memperluas jangkauan bisnis, menghadirkan pengalaman kuliner terbaik bagi pelanggan.

Kami percaya bahwa makanan bukan hanya tentang rasa, tetapi juga tentang budaya, kebersamaan, dan warisan yang harus dijaga. Dengan komitmen terhadap kualitas dan inovasi, NusantaraKitchen siap membawa cita rasa Indonesia ke tingkat yang lebih tinggi.`,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 py-8">
      {/* Section 1: Sejarah */}
      <section className="mb-16">
        <InfiniteMovingCards
          items={[testimonials[0]]}
          direction="left"
          speed="fast"
          className="[&_.my-custom-class]:px-4"
        />
      </section>

      {/* Section 2: Pencapaian */}
      <section className="mb-16">
        <InfiniteMovingCards
          items={[testimonials[1]]}
          direction="right"
          speed="fast"
          className="[&_.my-custom-class]:px-4 [&_.my-custom-class]:whitespace-pre-line"
        />
      </section>

      {/* Section 3: Filosofi */}
      <section className="mx-auto max-w-3xl px-5">
        <TextGenerateEffect 
          words="Di NusantaraKitchen, kami percaya bahwa makanan bukan hanya tentang rasa, tetapi juga tentang budaya, kebersamaan, dan warisan yang harus dijaga. Sebagai perusahaan yang berakar pada kuliner Nusantara, kami membawa semangat inovasi tanpa meninggalkan esensi tradisi."
          className="text-justify text-lg leading-relaxed md:text-xl md:leading-loose"
        />
      </section>
    </div>
  );
};

export default page;