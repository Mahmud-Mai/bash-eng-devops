import React, { ReactNode } from "react";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "../../types";
import { PRODUCTS_DATA } from "../../constants/index";

const FeaturedProducts = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mx-auto w-full">
      {PRODUCTS_DATA.map(
        ({
          id,
          category,
          heading,
          user,
          location,
          time,
          imgSrc,
          units,
          price,
        }: ProductCardProps): ReactNode => {
          return (
            <ProductCard
              key={id}
              category={category}
              heading={heading}
              user={user}
              location={location}
              time={time}
              imgSrc={imgSrc}
              units={units}
              price={price}
            />
          );
        }
      )}
    </div>
  );
};

export default FeaturedProducts;
