import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundLinesDemo } from "../background-lines";

const page = () => {
  return (
    <>
      <BackgroundLinesDemo />
      <div className="mx-7 justify-center text-center">
        <TextGenerateEffect words="Di NusantaraKitchen, kami percaya bahwa makanan bukan hanya tentang rasa, tetapi juga tentang budaya, kebersamaan, dan warisan yang harus dijaga. Sebagai perusahaan yang berakar pada kuliner Nusantara, kami membawa semangat inovasi tanpa meninggalkan esensi tradisi." />
      </div>
    </>
  );
};

export default page;
