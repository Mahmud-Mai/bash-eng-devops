import IntroCard from "@/components/IntroCard";
import SearchFilter from "@/components/SearchFilter";
import { IntroCardProps } from "../../types";
import Image from "next/image";

const INTRO_CONTENT = [
  {
    id: 0,
    icon: "icon",
    stepCount: "step One",
    title: "title",
    content:
      "some dummy content to explain the steps to follow. form a to so so and so.",
  },
  {
    id: 1,
    icon: "icon",
    stepCount: "step Two",
    title: "title",
    content:
      "some dummy content to explain the steps to follow. form a to so so and so.",
  },
  {
    id: 0,
    icon: "icon",
    stepCount: "step Three",
    title: "title",
    content:
      "some dummy content to explain the steps to follow. form a to so so and so.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero  */}
      <section className="flex flex-col w-full h-full py-24 px-32 items-center bg-gray-200 bg-[url('https://images.pexels.com/photos/17978110/pexels-photo-17978110/free-photo-of-bags-full-of-spices-at-the-market.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-no-repeat bg-bottom">
        <div className="p-8 rounded-lg bg-black/70 text-green-400 text-center">
          <h1 className="text-7xl font-bold leading-relaxed">
            Purchase your food items in <br /> bulk direct from the farm
          </h1>

          <h2 className="text-xl">Some sub heading</h2>
        </div>

        <div className="my-16 w-full">
          <SearchFilter />
        </div>
      </section>
      {/* Short About  */}
      <section className="flex flex-col items-center py-24 w-[80%]">
        <h1 className="mb-16 ">How it Works</h1>
        <div className="grid lg:grid-cols-3 space-x-16">
          {INTRO_CONTENT.map(
            ({ id, icon, stepCount, title, content }: IntroCardProps) => {
              return (
                <IntroCard
                  key={id}
                  icon={icon}
                  stepCount={stepCount}
                  title={title}
                  content={content}
                />
              );
            }
          )}
        </div>
      </section>

      {/* Recent products that link to products page  */}
    </main>
  );
}
