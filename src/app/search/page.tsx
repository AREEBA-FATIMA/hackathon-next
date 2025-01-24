// "use client";

// import React, { Suspense, useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import Header from "@/components/Header";

// // Define the types for the product
// type Product = {
//   _id: string;
//   title: string;
//   price: number;
//   discountedPrice: number;
//   department: string;
//   colors: string[];
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// };

// // Search Results Component
// const SearchResultsComponent = () => {
//   const searchParams = useSearchParams(); // Get query parameters
//   const query = searchParams.get("query"); // Extract the search query
//   const [products, setProducts] = useState<Product[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (query) {
//       const fetchProducts = async () => {
//         try {
//           setLoading(true);
//           const productQuery = `*[_type == "product" && title match "${query}*"]{
//             _id, 
//             title, 
//             price, 
//             discountedPrice, 
//             department, 
//             colors, 
//             image{asset->{url}}
//           }`;
//           const data = await client.fetch(productQuery);
//           setProducts(data);
//           if (data.length === 0) {
//             setError("No products found.");
//           } else {
//             setError(null);
//           }
//         } catch (err) {
//           console.error("Error fetching products:", err);
//           setError("Failed to load products. Please try again.");
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchProducts();
//     } else {
//       setProducts([]);
//       setError("No search query provided.");
//       setLoading(false);
//     }
//   }, [query]);

//   return (
//     <div className="p-8 border-t">
//       <h1 className="text-xl font-bold mb-4">
//         Search Results for: <span className="text-[#45bbed]">{query}</span>
//       </h1>

//       {loading && <div>Loading products...</div>}
//       {error && (
//         <div className="flex flex-col items-center justify-center text-center py-10">
//           <div className="text-6xl mb-4">😞</div>
//           <h2 className="text-xl font-semibold text-gray-700">
//             Oops, no products found!
//           </h2>
//           <p className="text-gray-500 mt-2">
//             We couldn&#39;t find anything matching your search. Try something
//             else, and we&#39;ll do our best to find the perfect product for you!
//           </p>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <Link key={product._id} href={`/shop/${product._id}`} target="blank">
//             <div className="transition flex flex-col items-center text-center py-4 cursor-pointer border border-gray-200 shadow-sm rounded-lg">
//               <div className="w-full flex justify-center mb-8">
//                 {product.image?.asset?.url ? (
//                   <Image
//                     src={product.image.asset.url}
//                     alt={product.title}
//                     width={200}
//                     height={250}
//                     className="object-cover h-[250px] w-[200px]"
//                   />
//                 ) : (
//                   <span>No image available</span>
//                 )}
//               </div>
//               <h2 className="text-sm font-semibold">{product.title}</h2>
//               <p className="text-gray-500 text-xs">{product.department}</p>
//               <div className="flex text-xs items-center justify-center mt-2">
//                 <span className="text-gray-400 mr-4">${product.price}</span>
//                 <span className="text-green-600 font-bold">
//                   ${product.discountedPrice}
//                 </span>
//               </div>
//               <div className="flex space-x-2 mt-2">
//                 {product.colors?.map((color, index) => (
//                   <span
//                     key={index}
//                     className={`w-3 h-3 rounded-full ${color}`}
//                   ></span>
//                 ))}
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// const SearchResultsPage = () => {
//   return (
//     <div>
//       <Header />
//       {/* Wrap the SearchResultsComponent in Suspense */}
//       <Suspense fallback={<div>Loading search results...</div>}>
//         <SearchResultsComponent />
//       </Suspense>
//     </div>
//   );
// };

// export default SearchResultsPage;
