import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  return res.json();
};

const ProductDetails = async ({ params }: { params: string }) => {
  const data = await getData();

  console.log(`🚀 ~ ProductDetails ~ data:`, data);
  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <div className="p-16 w-full mt-16">
        <h1 className="text-5xl text-center p-8">Product Details</h1>
        {/* <Image
          src={"#"}
          width="600"
          height="700"
          alt="product"
        /> */}
        <div className="my-4">
          <h1 className="text-center">H1</h1>
          <p>Description</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
