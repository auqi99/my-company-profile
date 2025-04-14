// app/services/layout.tsx (Server Component)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Teams | NusantaraKitchen",
  description: "Our great team, for serving you",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
