import React, { ReactNode } from "react";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "../../types";
import { MutatingDots } from "react-loader-spinner";

const ProductsList = ({ products }: { products: ProductCardProps[] }) => {
  console.log(`🚀 ~ ProductsList ~ products:`, products);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto w-full">
      {!products ? (
        <div className="flex justify-center">
          <MutatingDots
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        products.map(
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
        )
      )}
    </div>
  );
};

export default ProductsList;
