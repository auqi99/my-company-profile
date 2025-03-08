"use client";

import Image from "next/image";
import Script from "next/script";

const Overview = () => {
  return (
    <nav className="relative flex h-auto justify-center sm:h-auto md:relative md:min-h-[250px]">
      {/* Lazy Load External Scripts */}
      <Script src="https://example.com/somescript.js" strategy="lazyOnload" />

      <section className="px-4 pt-8 sm:px-2">
        {/* Company Overview Title */}
        <p className="bg-gradient-to-r from-purple-600 via-blue-500 bg-clip-text text-center text-xl font-bold text-transparent sm:text-lg md:text-xl">
          Company Overview
        </p>

        {/* Company Description (Optimized for LCP) */}
        <p className="mx-auto mt-4 max-w-5xl text-center text-base sm:text-sm">
          NusantaraKitchen is a leading F&B company dedicated to preserving and
          modernizing Indonesian cuisine by blending authentic flavors with
          innovation to create unforgettable dining experiences. Founded in
          1999, we started as a small local restaurant and have grown into a
          well-respected brand with multiple outlets, catering services, and
          strong partnerships with local farmers to ensure top-quality
          ingredients. We believe that food brings people together, and our
          values—teamwork, integrity, and innovation—drive us to uphold
          authentic recipes while embracing new culinary trends. Committed to
          sustainability, we prioritize fresh, locally sourced ingredients and
          ethical practices. Looking ahead, NusantaraKitchen aims to be a global
          ambassador of Indonesian cuisine, expanding through new locations,
          franchises, and innovative product lines, sharing the rich flavors of
          Nusantara with the world.
        </p>
      </section>
    </nav>
  );
};

export default Overview;
