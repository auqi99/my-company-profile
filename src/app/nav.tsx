"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating.nav";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: (
        <IconHome className="h-4 w-4 bg-black text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "About Us",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Service",
      link: "/service",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return (
    <div className="grid h-14 grid-cols-1 rounded-md bg-black dark:bg-black">
      <p className="mt-3 text-center text-xs font-bold text-white dark:text-white">
        Scroll back up to reveal Navbar
      </p>
      <div className="bg-grid-black/[0.1] dark:bg-grid-white/[0.2] absolute inset-0" />
    </div>
  );
};
