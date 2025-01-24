"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link for dynamic routing

// Define the types for the product
type Product = {
  _id: string;
  title: string;
  price: number;
  discountedPrice: number;
  department: string;
  colors: string[];
  image: {
    asset: {
      url: string;
    };
  };
};

const FeaturedProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"][0..7]{
          _id, 
          title, 
          price, 
          discountedPrice, 
          department, 
          colors, 
          image{asset->{url}} 
        }`; // Fetch the first 8 products
        const data = await client.fetch(query);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>{error}</div>; // Show error message if there's an issue
  }

  return (
    <div>
      {/* Featured Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
          <Link key={product._id} href={`/shop/${product._id}`} target="_blank">
            <div
              className="transition flex flex-col items-center text-center py-4 cursor-pointer"
            >
              <div className="w-full flex justify-center mb-8">
                {/* Image rendering with URL from Sanity */}
                {product.image?.asset?.url ? (
                  <Image
                    src={product.image.asset.url} // Valid URL from Sanity
                    alt={product.title}
                    width={200} // Fixed width
                    height={250} // Fixed height
                    className="object-cover h-[250px] w-[200px]" // Ensures image covers the space and maintains aspect ratio
                  />
                ) : (
                  <span>No image available</span> // Fallback message
                )}
              </div>
              <h2 className="text-sm font-semibold">{product.title}</h2>
              <p className="text-gray-500 text-xs">{product.department}</p>
              <div className="flex text-xs items-center justify-center mt-2">
                <span className="text-gray-400 mr-4">${product.price}</span>
                <span className="text-green-600 font-bold">
                  ${product.discountedPrice}
                </span>
              </div>
              <div className="flex space-x-2 mt-2">
                {product.colors?.map((color: string, index: number) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${color}`}
                  ></span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsSection;
