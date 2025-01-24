// pages/companies.js
import Image from "next/image";
import React from "react";

const Companies = () => {
  const companies = [
    { name: "Hooli", logo: "/images/comp-1.png" },
    { name: "Lyft", logo: "/images/comp-2.png" },
    { name: "Stripe", logo: "/images/comp-3.png" },
    { name: "AWS", logo: "/images/comp-4.png" },
    { name: "Reddit", logo: "/images/comp-5.png" },
    { name: "Reddit", logo: "/images/comp-6.png" },
  ];

  return (
    <div className="bg-gray-100">
      {/* Top Section */}
      <div className="py-16 flex flex-col items-center text-center mb-20">
        <h2 className="text-3xl font-bold mb-8">Big Companies Are Here</h2>
        <p className="text-gray-500 mt-2 max-w-xl mb-10">
          Problems trying to resolve the conflict between <br /> the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="flex flex-wrap justify-center items-center mt-10 gap-4 md:gap-8">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="lg:mx-4"
                width={80} 
                height={30} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Work With Us Section */}
      <div className="bg-[#3989d4] text-white flex flex-col md:flex-row items-center">
        <div className="p-12 md:w-1/2 lg:ml-40">
          <p className="uppercase text-sm tracking-wider font-semibold">
            Work With Us
          </p>
          <h3 className="text-4xl font-bold mt-6">Now Let’s grow Yours</h3>
          <p className="text-sm mt-4">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th.
          </p>
          <button className="mt-6 px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition">
            Button
          </button>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <Image
            src="/images/grow.png"
            alt="Person"
            className="object-cover"
            height={500}
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Companies;
