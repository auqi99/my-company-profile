// app/services/layout.tsx (Server Component)
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | NusantaraKitchen',
  description: 'Our premium services, just for you',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}