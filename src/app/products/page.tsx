"use client";
import React, { ReactNode, useState, useEffect } from "react";
import ProductsList from "@/components/ProductsList";
import { useGroupProductsByCategory } from "@/hooks/useGroupProductsByCategory";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { PRODUCTS_DATA as products_data } from "../../../constants";
import { ProductCardProps } from "../../../types";

const Products = (): ReactNode => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);

  const url = process.env.BASEURL;

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${url}`, {
        cache: "no-store",
      });
      if (!res.ok) return console.log("Error fetchin from Backend!!!");
      const jsonData = await res.json();
      setData(jsonData);
      console.log(`🚀 ~ getData ~ jsonData:`, jsonData);
      setLoading(false);
    };
    getData();
  }, []);

  const categories: {} | any = useGroupProductsByCategory(products_data);

  // Set the initial activeTab when the component mounts
  useEffect(() => {
    const firstCategory = Object.keys(categories).sort()[0];
    setActiveTab(firstCategory);
  }, [categories]);

  const handleTabChange = (category: string) => {
    setActiveTab(category);
  };

  // // Sort the category names alphabetically
  const sortedCategories = Object.keys(categories).sort();

  // // Filter the categories object based on the active tab
  const filteredCategories: ProductCardProps[] | [] = categories[activeTab];
  // console.log(`🚀 ~ Products ~ filteredCategories:`, filteredCategories);

  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <div className="p-16 w-full mt-16">
        <h1 className="text-5xl text-center p-8">Products</h1>
        {/* Products tab */}
        <section className="w-full">
          <section className="w-full mt-24">
            <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
              >
                {sortedCategories.map((category) => (
                  <Tab
                    key={category}
                    value={category}
                    onClick={() => handleTabChange(category)}
                    className={activeTab === category ? "text-gray-900" : ""}
                  >
                    {category}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                <TabPanel
                  key={activeTab}
                  value={activeTab}
                >
                  <ProductsList products={filteredCategories} />
                </TabPanel>
              </TabsBody>
            </Tabs>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Products;
