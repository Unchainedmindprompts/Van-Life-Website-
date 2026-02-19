import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Van Life | Find Your Perfect Class B Adventure Van",
  description:
    "A consultative resource for people discovering and buying Class B adventure vans. Compare models, explore the lifestyle, and find your perfect van.",
  keywords: [
    "Class B van",
    "van life",
    "adventure van",
    "camper van",
    "van conversion",
    "Sprinter conversion",
    "Winnebago Boldt",
    "Airstream Interstate",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-charcoal-900 text-sand-200 min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
