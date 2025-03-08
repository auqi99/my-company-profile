"use client";

import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var my-0">
      {" "}
      {/* Mengurangi margin atas & bawah */}
      <CardBody className="group/card relative mb-2 mt-2 h-auto w-[14rem] sm:w-[12rem] rounded-xl border bg-purple-400 p-4 dark:bg-black">
        <CardItem translateZ="40" className="text-lg font-bold text-black">
          Make things float in air
        </CardItem>
        <CardItem as="p" translateZ="50" className="mt-2 text-sm text-black">
          Hover over this card to unleash the power of CSS perspective
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
        <div className="mt-3 flex items-center justify-between">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="rounded-lg px-2 py-1 text-xs font-normal text-black"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="rounded-lg bg-purple-500 px-2 py-1 text-xs font-bold text-black"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
