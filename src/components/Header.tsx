import { link } from "fs";
import Link from "next/link";
import React from "react";

const NAV_LINKS = [
  { id: 0, text: "Home", route: "home" },
  { id: 0, text: "How it Works", route: "how-it-works" },
  { id: 0, text: "Products", route: "products" },
];

const Header = () => {
  return (
    <section>
      <div className="flex  justify-between items-center py-4">
        <div className="italic text-2xl">FarmDirect</div>
        <nav>
          <ul className="flex justify-between space-x-2">
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
