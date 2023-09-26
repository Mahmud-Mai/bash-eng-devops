import { link } from "fs";
import Link from "next/link";
import React from "react";

const NAV_LINKS = [
  { id: 0, text: "How it Works", route: "#how-it-works" },
  { id: 1, text: "Products", route: "products" },
  { id: 2, text: "Contact Us", route: "#" },
];

const Header = () => {
  return (
    <section className="absolute py-2 text-white bg-black/40 w-full mx-auto">
      <div className="flex  justify-between items-center p-4 w-full">
        <div className="italic text-2xl">
          <Link href={"/"}>FarmDirect</Link>
        </div>
        <nav>
          <ul className="flex justify-between space-x-6">
            {NAV_LINKS.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.route}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
