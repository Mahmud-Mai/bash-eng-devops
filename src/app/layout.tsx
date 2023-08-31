import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
