import { BackgroundLines } from "@/components/ui/background-lines";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function BackgroundLinesDemo() {
  const testimonials = [
    {
      quote: "Our History",
      name: "NusantaraKitchen didirikan dengan visi untuk menghadirkan kelezatan kuliner Nusantara ke seluruh penjuru dunia. Berawal dari kecintaan terhadap masakan tradisional Indonesia, perusahaan ini lahir sebagai upaya untuk melestarikan dan memperkenalkan ragam cita rasa khas Nusantara dengan sentuhan modern.",
    },
    {
      quote: "Milestones & Achievements",
      name:
        "1999, NusantaraKitchen resmi didirikan dengan fokus pada kuliner otentik Indonesia.\n" +
        "2003, Membuka cabang pertama di DI Yogyakarta.\n" +
        "2005, Meluncurkan menu inovatif yang menggabungkan tradisi dan tren modern dalam industri F&B.\n" +
        "2016, Meraih penghargaan [Nama Penghargaan] atas kontribusi dalam mempromosikan kuliner Nusantara.\n" +
        "Saat Ini NusantaraKitchen terus berkembang dengan memperluas jangkauan bisnis, menghadirkan pengalaman kuliner terbaik bagi pelanggan.\n\n" +
        "Kami percaya bahwa makanan bukan hanya tentang rasa, tetapi juga tentang budaya, kebersamaan, dan warisan yang harus dijaga. Dengan komitmen terhadap kualitas dan inovasi, NusantaraKitchen siap membawa cita rasa Indonesia ke tingkat yang lebih tinggi.",
    },
  ];

  return (
    <BackgroundLines className="flex h-full w-full flex-col items-center justify-start gap-2 px-4 py-6">
      <h2 className="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-center font-sans text-2xl font-bold tracking-tight text-transparent dark:from-neutral-600 dark:to-white md:text-4xl lg:text-7xl">
        Explore our legacy
      </h2>
      <p className="mx-auto max-w-xl text-center text-sm text-white dark:text-neutral-400 md:text-lg">
        Scroll down learn about our culture!
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
        pauseOnHover
        className="my-custom-class mt-6"
      />
      
    </BackgroundLines>
  );
}
