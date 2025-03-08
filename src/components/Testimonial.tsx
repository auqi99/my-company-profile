"use client"

import { CardStackDemo } from "@/app/card-stack";
import CountUp from "./ui/count-up";

const Testimonial = () => {
  return (
    <nav className="flex flex-col items-center h-auto pb-10 sm:h-auto sm:pb-10">
      <p className="mt-11 bg-gradient-to-r from-purple-600 via-blue-500 bg-clip-text text-center text-3xl font-bold text-transparent z-20 md:text-2xl sm:text-xl">
        Testimonials
      </p>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        <CardStackDemo />
      </div>
      <div className="grid grid-cols-2 gap-12 mt-8 text-center md:grid-cols-4 sm:grid-cols-2 sm:gap-6">
        <CountUp from={0} to={100} className="text-5xl font-bold text-white sm:text-3xl" />
        <CountUp from={0} to={250} className="text-5xl font-bold text-white sm:text-3xl" />
        <CountUp from={0} to={490} className="text-5xl font-bold text-white sm:text-3xl" />
        <CountUp from={0} to={999} className="text-5xl font-bold text-white sm:text-3xl" />
      </div>
    </nav>
  );
};


export default Testimonial;