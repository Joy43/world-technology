// useProduct.js
import { useState, useEffect } from "react";

const useProduct = (search) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://server-assingment-12.vercel.app/product?search=${search}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [search]);

  return [product, loading];
};

export default useProduct;
