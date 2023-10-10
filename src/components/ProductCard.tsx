import Image from "next/image";
import React, { ReactNode } from "react";

import { MdOutlineCategory } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { ProductCardProps } from "../../types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

const ProductCard = ({
  id,
  category,
  heading,
  imgSrc,
  units,
  price,
}: ProductCardProps): ReactNode => {
  return (
    <Link href={`/${id}`}>
      <div className="flex border rounded-lg">
        <div className="relative w-full h-[300]">
          {imgSrc
            ? imgSrc.map(
                (
                  item: string | StaticImport,
                  i: React.Key | null | undefined
                ) => {
                  return (
                    <Image
                      key={i}
                      src={item}
                      fill
                      sizes="100vw"
                      alt="Popular Advert"
                    />
                  );
                }
              )
            : "No Image to display"}
        </div>
        <div className="flex flex-col w-full space-y-3 p-6">
          {/* First section */}
          <div className="flex text-lg text-gray-600 items-center space-x-4">
            <span>
              <MdOutlineCategory />
            </span>
            <span> {category}</span>
          </div>

          <div className="text-xl text-gray-900">{heading}</div>

          {/* Second section  */}
          <div className="flex justify-between text-gray-500 text-sm">
            {/* <div className="flex items-center space-x-10">
            <span className="mr-2">
              <BiUser />
            </span>
            {user}
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              <BiUser />
            </span>
            {location}
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              <BiUser />
            </span>
            {time}
          </div> */}
          </div>

          {/* Thrd section */}

          <div className="flex justify-between items-center">
            <div className="flex space-x-2 items-baseline">
              <span className="text-red-500 text-xl">N{price}</span>
              <span className="text-xs text-gray-500">/{units}</span>
            </div>
            <div>
              <span>
                <AiOutlineHeart
                  style={{ fontSize: "24px", color: "rgb(34, 197, 94)" }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
