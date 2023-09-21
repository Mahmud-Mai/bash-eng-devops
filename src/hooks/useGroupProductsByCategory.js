// Custom hook for grouping products by category
import { useEffect, useState } from "react";

export function useGroupProductsByCategory(productsData) {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    // Group products by category when the component mounts
    const groupedCategories = groupProductsByCategory(productsData);
    // Add an "All" category to show all products initially
    groupedCategories.All = productsData;
    setCategories(groupedCategories);
  }, [productsData]);

  return categories;
}

// Helper function to group products by category
function groupProductsByCategory(products) {
  const categories = {};

  products.forEach((product) => {
    if (!categories[product.category]) {
      categories[product.category] = [];
    }
    categories[product.category].push(product);
  });

  return categories;
}
