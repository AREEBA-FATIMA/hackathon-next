"use client";
import Image from "next/image";
import Team from "../team/page";
import Companies from "../company/page";
import Footer from "@/app/[home]/footer/page";
import Navbar from "@/components/Header-3";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-8">
        {/* Left Text Section */}
        <div className="flex flex-col space-y-10 md:ml-20 md:w-1/2">
          <p className="uppercase text-sm font-bold text-gray-600">About Company</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 uppercase mt-6 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 text-lg">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <button className="px-6 py-3 bg-[#14a2f5] text-white text-sm rounded-md font-medium w-fit">
            Get Quote Now
          </button>
        </div>

        {/* Right Image Section */}
        <div className="relative mt-10 md:mt-0 md:w-1/2">
          <div className="absolute -z-10 -top-10 right-0 w-72 h-72 bg-pink-100 rounded-full"></div>
          <Image
            src="/images/a-bg.png"
            alt="Shopping Woman"
            width={550}
            height={520}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-6 md:px-20 py-20 bg-white">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-center w-full">
            <div className="text-center md:text-left">
              <h4 className="text-red-500 text-sm font-bold uppercase mb-10">
                Problems trying
              </h4>
              <h2 className="text-3xl font-bold text-gray-800">
                Met minim Mollie non desert <br />
                Alamo est sit cliquey dolor do met sent.
              </h2>
            </div>
            <p className="text-gray-600 mt-4 text-sm max-w-md text-center md:text-left">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
          </div>
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 w-full">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-800">15K</h2>
              <p className="text-gray-600 text-sm mt-2 font-semibold">Happy Customers</p>
            </div>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-800">150K</h2>
              <p className="text-gray-600 text-sm mt-2 font-semibold">Monthly Visitors</p>
            </div>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-800">15</h2>
              <p className="text-gray-600 text-sm mt-2 font-semibold">Countries Worldwide</p>
            </div>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-800">100+</h2>
              <p className="text-gray-600 text-sm mt-2 font-semibold">Top Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-6 md:px-20 py-20 bg-white">
        <div className="flex justify-center items-center">
          <div className="relative">
            <Image
              src="/images/video.png"
              alt="Mountain Video"
              width={700}
              height={350}
              className="rounded-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#14a2f5] p-4 rounded-full cursor-pointer">
              <span className="text-white text-3xl">▶</span>
            </div>
          </div>
        </div>
      </section>
      <Team />
      <Companies />
      <Footer />
    </div>
  );
}
