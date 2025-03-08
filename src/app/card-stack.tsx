"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils/cn";
export function CardStackDemo() {
  return (
    <div className="flex h-[25rem] w-full items-center justify-center">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-black dark:text-emerald-500",
        className,
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Juna Rorimpandey",
    designation: "Chef",
    content: (
      <p>
        "Makanan di NusantaraKitchen{" "}
        <Highlight>benar-benar menggugah selera! Saya sangat suka </Highlight>{" "}
        bagaimana setiap hidangan menghadirkan cita rasa autentik Nusantara.
        Favorit saya adalah Rendang dan Ayam Betutu—bumbu meresap sempurna!
        Pasti bakal jadi langganan!"
      </p>
    ),
  },
  {
    id: 1,
    name: "Arnold Poernomo",
    designation: "Chef",
    content: (
      <p>
        "Sebagai orang yang sibuk kerja, saya sering cari makanan enak dan
        praktis. <Highlight>NusantaraKitchen jawabannya!</Highlight> Pengiriman
        cepat, makanan masih fresh, dan porsinya pas. Sate Marangginya juara
        banget!""
      </p>
    ),
  },
  {
    id: 2,
    name: "Rudy Choirudin",
    designation: "Chef",
    content: (
      <p>
        "Saya suka masakan tradisional, tapi nggak selalu sempat masak sendiri.
        <Highlight>NusantaraKitchen jadi solusi!</Highlight> Rasanya kaya
        masakan rumahan, sehat, dan higienis. Anak-anak juga suka Nasi Liwetnya.
        Recommended banget!"
      </p>
    ),
  },
];
