import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZorgVrij",
  description: "Mobile-first assistent voor zorg-zzp’ers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
