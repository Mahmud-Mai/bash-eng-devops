import ProductsList from "@/components/ProductsList";
import React, { ReactNode } from "react";

const Products = (): ReactNode => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <div className="p-16 w-full mt-16">
        <h1 className="text-5xl text-center p-8">Available products</h1>
        {/* Products tab  */}
        <section className="w-full">
          <ProductsList />
        </section>
      </div>
    </section>
  );
};

export default Products;
