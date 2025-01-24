"use client"
import { client } from "@/sanity/lib/client"; // Your Sanity client
import { notFound } from "next/navigation"; // To handle when the product is not found
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/app/[home]/footer/page";
import { FaRegHeart, FaRegEye } from "react-icons/fa"; // Importing thin (outlined) icons from React Icons
import { IoCartOutline } from "react-icons/io5"; // Importing thin (outlined) cart icon
import { use } from "react"; // React hook for resolving promises

// Define the Product type
type Product = {
  _id: string;
  title: string;
  price: number;
  discountedPrice: number;
  description: string;
  availability: string;
  colors: string[] | null;
  image: {
    asset: {
      url: string;
    };
  };
};

// Fetch product details from Sanity
const fetchProduct =  (projectId: string) => {
  const query = `*[_type == "product" && _id == $projectId]{
    _id,
    title,
    price,
    discountedPrice,
    description,
    availability,
    colors,
    image{asset->{url}}
  }[0]`;

  return  client.fetch(query, { projectId });
};

const ProductDetailPage = ({
  params: paramsPromise,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const params = use(paramsPromise);
  const { projectId } = params;

  const product: Product | null = use(fetchProduct(projectId));

  if (!product) {
    notFound(); // Show a 404 page if the product is not found
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Breadcrumb */}
      <div className="py-4 px-6 text-base text-gray-600">
        <span>Home</span> <span className="mx-2">/</span> <span>Shop</span>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col lg:flex-row">
          {/* Left: Product Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src={product.image?.asset?.url || ""}
              alt={product.title}
              width={500}
              height={700}
              className="rounded-lg object-cover max-h-[400px]"
            />
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

            {/* Rating */}
            <div className="flex text-2xl items-center mt-3 space-x-1 text-yellow-500">
              <span>★★★★★</span>
              <span className="text-sm text-gray-600">(5 Reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center mt-4">
              <span className="text-2xl font-bold text-[#23A6F0]">
                ${product.discountedPrice}
              </span>
              <span className="text-gray-400 line-through ml-3">
                ${product.price}
              </span>
            </div>

            {/* Availability */}
            <p className="text-sm text-green-600 mt-2">
              Availability: <span className="font-semibold">{product.availability}</span>
            </p>

            {/* Description */}
            <p className="mt-6 text-gray-600">{product.description}</p>

            {/* Colors */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-700">Colors:</p>
              {product.colors && product.colors.length > 0 ? (
                <div className="flex items-center mt-2 space-x-3">
                  {product.colors.map((color: string, idx: number) => (
                    <span
                      key={idx}
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No colors available</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex items-center mt-8 space-x-4">
              <button className="px-6 py-2 bg-[#23A6F0] text-white font-semibold rounded hover:bg-blue-700">
                Select Options
              </button>
              <div className="flex space-x-2 text-gray-500 text-xl">
                {/* Using thin icons */}
                <button
                  className="relative group hover:text-gray-800 p-3 border-2 rounded-full hover:border-[#23A6F0] transition-all duration-300"
                >
                  <FaRegHeart />
                  <span className="p-2 absolute left-1/2 transform -translate-x-1/2 bottom-10 text-xs bg-gray-400 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Wishlist
                  </span>
                </button>
                <button
                  className="relative group hover:text-gray-800 p-3 border-2 rounded-full hover:border-[#23A6F0] transition-all duration-300"
                >
                  <IoCartOutline />
                  <span className="p-2 absolute left-1/2 transform -translate-x-1/2 bottom-10 text-xs bg-gray-400 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Cart
                  </span>
                </button>
                <button
                  className="relative group hover:text-gray-800 p-3 border-2 rounded-full hover:border-[#23A6F0] transition-all duration-300"
                >
                  <FaRegEye />
                  <span className="p-2 absolute left-1/2 transform -translate-x-1/2 bottom-10 text-xs bg-gray-400 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    View
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
