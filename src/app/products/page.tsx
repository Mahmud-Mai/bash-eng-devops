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
import { PRODUCTS_DATA } from "../../../constants";

const Products = (): ReactNode => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const categories = useGroupProductsByCategory(PRODUCTS_DATA);

  // Set the initial activeTab when the component mounts
  useEffect(() => {
    const firstCategory = Object.keys(categories.sort()[0]);
    console.log(`🚀 ~ useEffect ~ firstCategory:`, firstCategory);
    // setActiveTab(firstCategory);
  }, [categories]);

  const handleTabChange = (category: string) => {
    setActiveTab(category);
  };

  // Filter the categories object based on the active tab
  // const categories = categories[activeTab] || [];

  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <div className="p-16 w-full mt-16">
        <h1 className="text-5xl text-center p-8">Available products</h1>
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
                {Object.keys(categories).map((category) => (
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
                  <ProductsList products={categories} />
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
