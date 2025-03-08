"use client";

import Jumbotron from "@/components/Jumbotron";
import Overview from "@/components/Overview";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import { Boxes } from "@/components/ui/background-boxes";

export function BackgroundBoxesDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-black h-auto min-h-screen">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <Boxes />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <Jumbotron />
        <Overview />
        <Service />
        <Testimonial />
      </div>
    </div>
  );
}

export default BackgroundBoxesDemo;
