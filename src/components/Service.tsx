"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

const Service = () => {
  return (
    <nav className="mt-10 flex h-auto flex-col items-center sm:mt-12 md:mt-1">
      <section className="w-full max-w-5xl px-4">
        <p className="mb-6 bg-gradient-to-r from-purple-600 via-blue-500 bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl">
          Our Products
        </p>
        <nav>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-12">
            <CardContainer className="inter-var my-0">
              {" "}
              {/* Mengurangi margin atas & bawah */}
              <CardBody className="group/card relative mb-2 mt-2 h-auto w-[14rem] rounded-xl border bg-purple-400 p-4 dark:bg-black sm:w-[12rem]">
                <CardItem
                  translateZ="40"
                  className="text-lg font-bold text-black"
                >
                  Nasi Jagung
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="50"
                  className="mt-2 text-sm text-black"
                >
                  Perpaduan nasi dan jagung yang gurih alami, memberikan cita
                  rasa unik dengan tekstur lembut dan aroma khas. Sajian
                  tradisional bernutrisi tinggi yang cocok menemani hidangan
                  utama.
                </CardItem>
                <CardItem translateZ="80" className="mt-4 w-full">
                  <Image
                    src="/aku.jpg"
                    height="800"
                    width="800"
                    className="h-20 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var my-0">
              {" "}
              {/* Mengurangi margin atas & bawah */}
              <CardBody className="group/card relative mb-2 mt-2 h-auto w-[14rem] rounded-xl border bg-purple-400 p-4 dark:bg-black sm:w-[12rem]">
                <CardItem
                  translateZ="40"
                  className="text-lg font-bold text-black"
                >
                  Nasi Orak-Arik
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="50"
                  className="mt-2 text-sm text-black"
                >
                  Perpaduan nasi goreng dengan telur yang diorak-arik bersama
                  potongan sayuran segar, menciptakan cita rasa gurih dan
                  tekstur lembut yang nikmat.
                </CardItem>
                <CardItem translateZ="80" className="mt-4 w-full">
                  <Image
                    src="/aku.jpg"
                    height="800"
                    width="800"
                    className="h-20 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </nav>
      </section>
    </nav>
  );
};

export default Service;
