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
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
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
