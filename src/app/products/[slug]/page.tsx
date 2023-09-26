import React from "react";

const ProductDetails = ({ params }: { params: string }) => {
  console.log(`🚀 ~ ProductDetails ~ params:`, params);
  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <div className="p-16 w-full mt-16">
        <h1 className="text-5xl text-center p-8">Product Details</h1>
      </div>
    </section>
  );
};

export default ProductDetails;
