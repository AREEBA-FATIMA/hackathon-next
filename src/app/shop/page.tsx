"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; 
import { client } from "@/sanity/lib/client"; 
import Footer from "../[home]/footer/page";
import Header from "@/components/Header";
import { FaTh, FaList, FaAngleRight } from "react-icons/fa";
import Link from "next/link";

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

const ShopSection = () => {
  const params = useParams(); // To get parameters from the URL
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const categories = [
    { name: "Party Wear", image: "/images/shop-1.png" },
    { name: "Casual", image: "/images/shop-2.png" },
    { name: "Formal", image: "/images/shop-3.png" },
    { name: "Summer", image: "/images/shop-4.png" },
    { name: "Winter", image: "/images/shop-5.png" },
  ];

  useEffect(() => {
    if (params?.projectId) {
      // The projectId from the URL is not being used here, so no need to keep track of it
      console.log("Project ID: ", params.projectId);
    }
  }, [params]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedCategory) {
        const query = `*[_type == "product" && department == "${selectedCategory}"]{
          _id,
          title,
          price,
          discountedPrice,
          department,
          colors,
          image{asset->{url}}
        }`;
        const data = await client.fetch(query);
        setProducts(data);
        console.log(data);
      }
    };

    if (selectedCategory) {
      fetchProducts();
    }
  }, [selectedCategory]);

  return (
    <div>
      <Header />

      <section className="py-12 px-4 md:px-16 lg:px-24 bg-gray-100">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Shop</h1>
          </div>
          <p className="text-sm text-black mt-1 flex items-center">
            <span>Home</span>
            <FaAngleRight className="mx-2 text-gray-400" />
            <span className="text-gray-400">Shop</span>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center h-52 overflow-hidden shadow-md cursor-pointer"
              style={{ backgroundImage: `url('${category.image}')` }}
              onClick={() => setSelectedCategory(category.name)}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl opacity-0 hover:opacity-100 transition-all">
                <span>{category.name}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">{selectedCategory} Outfits</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link key={product._id} href={`/shop/${product._id}`} target="_blank">
                  <div className="transition flex flex-col items-center text-center px-4 py-6 bg-white shadow-lg">
                    <div className="w-full flex justify-center mb-8">
                      <img
                        src={product.image?.asset?.url}
                        alt={product.title}
                        className="object-cover w-48 h-48"
                      />
                    </div>
                    <h3 className="text-sm font-semibold">{product.title}</h3>
                    <p className="text-gray-500 text-xs">Category: {product.department}</p>
                    <div className="flex text-xs items-center justify-center mt-2">
                      <span className="text-gray-400 mr-4">${product.price}</span>
                      <span className="text-green-600 font-bold">${product.discountedPrice}</span>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      {product.colors?.map((color, idx) => (
                        <span key={idx} className={`w-3 h-3 rounded-full ${color}`}></span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row justify-between items-center border-t pt-4">
          <p className="text-sm text-gray-500">
            {selectedCategory ? `Showing results for ${selectedCategory}` : "Select a category to view products"}
          </p>
          <div className="flex items-center space-x-2">
            <p className="font-semibold text-sm">Views:</p>
            <button className="p-3 text-xs rounded-md border text-gray-600 hover:bg-gray-300">
              <FaTh />
            </button>
            <button className="p-3 text-xs rounded-md border text-gray-600 hover:bg-gray-300">
              <FaList />
            </button>
          </div>
          <div className="flex space-x-4">
          <div className="flex items-center space-x-4"> 
            <p className="font-semibold text-sm">Filter by Category:</p>
            <select
              className="py-2 px-2 bg-gray-200 text-center text-gray-600"
              value={selectedCategory || ""}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" disabled className="py-4 bg-gray-200 text-center rounded-sm text-gray-600">
                Select Category
              </option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopSection;
