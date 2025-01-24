"use client"
import PricingPage from "../price/page";
import PricingFaq from "../faqs/page";
import Footer from "@/app/[home]/footer/page";
import Navbar from "@/components/Header-3";

export default function Price(){

return (
  <div className="min-h-screen bg-gray-50">
        <div className="bg-white">
            {/* Navbar */}
        <Navbar />
        {/* Centered Content */}
        <div className="min-h-[50vh] flex item-center flex-col justify-center text-center">
            <h2 className="text-sm text-gray-600">PRICING</h2>
            <h1 className="text-5xl font-bold text-gray-800 mt-6 mb-6">Simple Pricing</h1>
            <p className="text-gray-500 mt-4">Home {'>'} Pricing</p>
        </div>
        </div>
        <PricingPage />
        <PricingFaq />
        <Footer />
    </div>
    )
}