"use client";
import { useState } from "react";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  const companies = [
    { name: "Hooli", logo: "/images/comp-1.png" },
    { name: "Lyft", logo: "/images/comp-2.png" },
    { name: "Stripe", logo: "/images/comp-3.png" },
    { name: "AWS", logo: "/images/comp-4.png" },
    { name: "Reddit", logo: "/images/comp-5.png" },
    { name: "Reddit", logo: "/images/comp-6.png" },
    ];
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Pricing</h1>
        <p className="text-gray-500 mt-4">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex items-center justify-center mb-12">
        <span
          className={`cursor-pointer ${
            billingCycle === "monthly" ? "text-gray-800 font-semibold" : "text-gray-400"
          }`}
          onClick={toggleBillingCycle}
        >
          Monthly
        </span>
        <div
          className="flex mx-4 w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer"
          onClick={toggleBillingCycle}
        >
          <div
            className={`w-4 h-4 bg-[#14a2f5] rounded-full transition-transform ${
              billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>
        <span
          className={`cursor-pointer ${
            billingCycle === "yearly" ? "text-gray-800 font-semibold" : "text-gray-400"
          }`}
          onClick={toggleBillingCycle}
        >
          Yearly
        </span>
        {billingCycle === "yearly" && (
          <span className="text-sm bg-[#9adafc]  text-[#14a2f5] font-medium px-4 py-2 rounded-full ml-4">
            Save 25%
          </span>
        )}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl items-end">
        {/* Free Plan */}
        <div className="border border-blue-300 rounded-lg p-8 text-center bg-white shadow-md">
          <h2 className="text-xl font-bold text-gray-800">FREE</h2>
          <p className="text-gray-500 mt-4 font-semibold text-sm">Organize across all <br /> apps by hand</p>
          <p className="text-4xl font-bold text-[#14a2f5] mt-4">
            0<span className="text-lg">$</span>
          </p>
          <p className="mt-1 text-[#9adafc]">Per Month</p>
          <div className="mt-6">
            <p className="text-gray-600">✔ Unlimited product updates</p>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="border border-blue-300 rounded-lg p-8 text-center bg-[#02334f] text-white shadow-lg transform scale-105">
          <h2 className="text-xl font-bold">STANDARD</h2>
          <p className="text-white mt-4 font-semibold text-sm">Organize across all <br /> apps by hand</p>
          <p className="text-4xl font-bold mt-4 text-[#14a2f5]">
            {billingCycle === "monthly" ? "9.99" : "7.49"}
            <span className="text-lg">$</span>
          </p>
          <p className="text-[#9adafc] mt-1">Per Month</p>
          <div className="mt-6">
            <p className="text-white">✔ Unlimited product updates</p>
            <p className="text-white">✔ Unlimited product updates</p>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="border border-blue-300 rounded-lg p-8 text-center bg-white shadow-md">
          <h2 className="text-xl font-bold text-gray-800">PREMIUM</h2>
          <p className="text-gray-500 mt-4 font-semibold text-sm">Organize across all <br />  apps by hand</p>
          <p className="text-4xl font-bold text-[#14a2f5] mt-4">
            {billingCycle === "monthly" ? "19.99" : "14.99"}
            <span className="text-lg">$</span>
          </p>
          <p className="text-[#9adafc] mt-1">Per Month</p>
          <div className="mt-6">
            <p className="text-gray-600">✔ Unlimited product updates</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center -mt-4 z-10 bg-gray-50 w-full p-8">
        <p className="text-gray-500 text-base font-semibold mb-6">
          Trusted By Over 4000 Big Companies
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
    </div>
  );
}

