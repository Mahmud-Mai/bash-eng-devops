import React, { ReactNode, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductCardProps, ProductListProps } from "../../types";
import { MutatingDots } from "react-loader-spinner";
import { notFound } from "next/navigation";

const ProductsList = ({ products }: { products: ProductCardProps[] }) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store",
      });
      if (!res.ok) return notFound();
      const jsonData = await res.json();
      setData(jsonData);
      setLoading(false);
    };
    getData();
  }, []);

  console.log(`🚀 ~ ProductsList ~ data:`, data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto w-full">
      {!data ? (
        <div className="flex justify-center items-center">
          {isLoading ? (
            <div className="flex justify-center items-center">
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
            <p>No profile data</p>
          )}
        </div>
      ) : (
        data.map(
          ({
            _id,
            category,
            title,
            image,
            unit,
            price,
          }: ProductListProps): ReactNode => {
            return (
              <ProductCard
                key={_id}
                category={category}
                heading={title}
                user={"user"}
                location={"Zaria"}
                time={"time"}
                imgSrc={image}
                units={unit}
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
