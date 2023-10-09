import Image from "next/image";
import React, { useEffect, useState } from "react";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return "Couldn't Fetch Data from Server";
  return res.json();
};

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const mappeddata = await getData(slug);
  const data = await [mappeddata];
  console.log(`🚀 ~ ProductDetails ~ data:`, data);

  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <div className="p-16 w-full mt-16">
        <div>
          {data.map((item) => {
            return (
              <div
                key={item._id}
                className="my-4"
              >
                <h1 className="text-5xl text-center p-8">{item.title}</h1>
                <div className="my-4 flex justify-center">
                  {item.image
                    ? item.image.map(
                        (
                          item: string | StaticImport,
                          i: React.Key | null | undefined
                        ) => {
                          return (
                            <Image
                              key={i}
                              src={item}
                              width={800}
                              height={700}
                              alt="Popular Advert"
                            />
                          );
                        }
                      )
                    : "No Image to display"}
                </div>
                <div className="flex justify-between text-center">
                  <p>{item.desc}</p>
                </div>
                <div className="max-w-[80%] flex justify-between items-center my-6">
                  <h3 className="bold text-2xl p-4">Interested?</h3>
                  <p>
                    <span className="text-xl p-4">Contact Us at:</span>
                    <span className="text-xl p-4">
                      Phone Number: 081-123456789
                    </span>
                    <span className="text-xl p-4">
                      Email: farmdirect@mail.com
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
