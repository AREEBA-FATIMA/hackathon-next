"use client";
import Image from "next/image";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from "@/app/[home]/footer/page";
import Navbar from "@/components/Header-3";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-8">
        {/* Left Text Section */}
        <div className="flex flex-col space-y-10 md:ml-20 md:w-1/2">
          <p className="uppercase text-sm font-bold text-gray-600">Contact us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-6 mb-4 leading-loose">
            Get in touch <br />
            today!
          </h1>
          <p className="text-gray-600 text-lg">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          {/* Phone icon and Fax icon */}
          <div className="flex flex-col text-xl font-bold">
            <span>Phone: +451 215 215</span>
            <span>Fax: +451 215 215</span>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-black w-8 h-8 cursor-pointer hover:scale-110 transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-black w-8 h-8 cursor-pointer hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-black w-8 h-8 cursor-pointer hover:scale-110 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-black w-8 h-8 cursor-pointer hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative mt-10 md:mt-0 md:w-1/2">
          <div className="absolute -z-10 -top-10 right-0 w-72 h-72 bg-pink-100 rounded-full"></div>
          <Image
            src="/images/contact.png"
            alt="Shopping Woman"
            width={550}
            height={520}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Visit Our Office Section */}
      <div>
        <div className="text-center mb-12">
          <p className="text-black font-bold text-sm uppercase">Visit Our Office</p>
          <h2 className="text-4xl font-bold text-gray-800 mt-6">
            We help small businesses <br /> with big ideas
          </h2>
        </div>

        <div className="flex items-center justify-center">
          <section className="flex flex-col md:flex-row items-center justify-around px-6 md:px-20 py-8 w-4/5">
            {/* Phone Section */}
            <div className="flex flex-col items-center justify-center text-center p-6 md:w-1/3 min-h-[350px]">
              <div className="text-[#14a2f5] text-5xl mb-8">
                <FaPhoneAlt />
              </div>
              <p className="text-base font-bold text-black mt-4">georgia.young@example.com</p>
              <p className="text-base font-bold text-black mt-2">georgia.young@ple.com</p>
              <p className="text-lg font-bold text-black mt-6">Get Support</p>
              <button className="mt-6 px-6 py-2 text-[#14a2f5] border border-[#14a2f5] rounded-full hover:bg-[#14a2f5] hover:text-white transition">
                Submit Request
              </button>
            </div>

            {/* Location Section */}
            <div className="flex flex-col items-center justify-center text-center bg-[#02334f] p-6 md:w-1/3 min-h-[350px]">
              <div className="text-5xl mb-4 text-[#14a2f5]">
                <FaMapMarkerAlt />
              </div>
              <p className="text-base font-semibold text-white mt-4">georgia.young@example.com</p>
              <p className="text-base font-semibold text-white mt-2">georgia.young@ple.com</p>
              <p className="text-lg font-semibold text-white mt-6">Get Support</p>
              <button className="mt-6 px-6 py-2 text-[#14a2f5] border border-[#14a2f5] rounded-full hover:bg-[#14a2f5] hover:text-white transition">
                Get Directions
              </button>
            </div>

            {/* Email Section */}
            <div className="flex flex-col items-center justify-center text-center p-6 md:w-1/3 min-h-[350px]">
              <div className="text-[#14a2f5] text-5xl mb-4">
                <FaEnvelope />
              </div>
              <p className="text-base font-bold text-black mt-4">georgia.young@example.com</p>
              <p className="text-base font-bold text-black mt-2">georgia.young@ple.com</p>
              <p className="text-lg font-bold text-black mt-6">Get Support</p>
              <button className="mt-6 px-6 py-2 text-[#14a2f5] border border-[#14a2f5] rounded-full hover:bg-[#14a2f5] hover:text-white transition">
                Email Us
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Call to Action Section */}
    <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-6">
            {/* Arrow Image */}
            <Image width={100} height={100} src={'/images/arrow.png'} alt="Arrow Image" className="mx-auto" />

            {/* Text */}
            <p className="text-gray-500 text-sm font-bold uppercase">
            WE Can&apos;t WAIT TO MEET YOU
            </p>
            <h1 className="text-5xl font-bold text-gray-800">Let&rsquo;s Talk</h1> {/* Replaced '’' with &rsquo; */}

            {/* Button */}
            <button className="flex items-center px-6 py-3 bg-[#14a2f5] text-white text-sm rounded-md font-medium w-fit mx-auto">
            Try it for free now
            </button>
        </div>
        </div>

      <Footer />
    </div>
  );
}
