import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Farm Direct",
  description: "Purchase your food items in bulk direct from the farm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative w-[80%] mx-auto">
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
