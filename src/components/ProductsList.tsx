import React, { ReactNode } from "react";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "../../types";

const ProductsList = ({ products }: { products: ProductCardProps[] }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto w-full">
      {products.map(
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

export default ProductsList;
