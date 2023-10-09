import React, { ReactNode } from "react";
import FeaturedProdCard from "./FeaturedProdCard";
import { ProductCardProps } from "../../types";
import { PRODUCTS_DATA } from "../../constants/index";
import { MutatingDots } from "react-loader-spinner";

const FeaturedProducts = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mx-auto">
      {!PRODUCTS_DATA ? (
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
        PRODUCTS_DATA.map(
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
              <FeaturedProdCard
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

export default FeaturedProducts;
