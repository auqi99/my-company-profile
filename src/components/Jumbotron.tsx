import Image from "next/image";

const Jumbotron = () => {
  return (
    <div className="flex h-[400px] flex-col items-center justify-center z-20 md:h-[300px]">
      <Image src="/reiner.jpg" alt="food" width={350} height={120} className="w-[250px]" />
      <p className="bg-gradient-to-r from-purple-800 via-blue-800 to-green-800 bg-clip-text text-center text-3xl font-extrabold text-transparent sm:text-7xl md:text-5xl">
        NusantaraKitchen
      </p>
      <p className="text-xs text-center sm:text-lg">Ragam Rasa Nusantara, Dalam Satu Dapur</p>
    </div>
  );
};

export default Jumbotron;

