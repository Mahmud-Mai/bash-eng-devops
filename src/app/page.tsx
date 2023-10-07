"use client";
import IntroCard from "@/components/IntroCard";
import SearchFilter from "@/components/SearchFilter";
import { IntroCardProps } from "../../types";
import Image from "next/image";
import Products from "@/components/ProductsList";
import FeaturedProduct from "@/components/FeaturedProducts";
import FeaturedProducts from "@/components/FeaturedProducts";
import { INTRO_DATA } from "../../constants";
import IntroCardsList from "@/components/IntroCardsList";
import { ThemeProvider } from "@material-tailwind/react";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col items-center justify-between">
        {/* Hero  */}
        <section className="flex flex-col w-full h-full py-24 px-32 items-center bg-gray-200 bg-[url('https://images.pexels.com/photos/17978110/pexels-photo-17978110/free-photo-of-bags-full-of-spices-at-the-market.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-no-repeat bg-bottom">
          <div className="px-8 mt-12 rounded-lg bg-black/70 text-green-400 text-center">
            <h1 className="text-5xl font-bold leading-relaxed">
              Purchase your food items in <br /> bulk direct from the farm
            </h1>

            {/* <h2 className="text-xl">Some sub heading</h2> */}
          </div>

          <div className="my-16 w-full">
            <SearchFilter />
          </div>
        </section>
        {/* Short About  */}
        <section className="flex flex-col items-center py-24 w-[80%]">
          <h1
            className="mb-16 text-5xl"
            id="how-it-works"
          >
            How it Works
          </h1>
          <IntroCardsList />
        </section>

        {/* Featured products that link to products page  */}
        <section className="flex flex-col items-center py-24 w-[80%]">
          <div className="w-full">
            <h1 className="text-5xl text-center py-4">Featured products</h1>
            {/* Products tab  */}
            <section className="py-4">
              <FeaturedProducts />
            </section>
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}
