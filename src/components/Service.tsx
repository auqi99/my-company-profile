"use client";

import { ThreeDCardDemo } from "@/app/3d-card";

const Service = () => {
  return (
    <nav className="z-20 mt-6 flex h-auto flex-col items-center sm:mt-12 md:mt-16">
      <section className="w-full max-w-5xl px-4">
        <p className="mb-6 bg-gradient-to-r from-purple-600 via-blue-500 bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl">
          Our Products
        </p>
        <nav>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-12">
            <ThreeDCardDemo />
            <ThreeDCardDemo />
          </div>
        </nav>
      </section>
    </nav>
  );
};

export default Service;
