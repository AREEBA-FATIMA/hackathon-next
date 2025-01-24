"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"; 
import Footer from "../[home]/footer/page";
import Navbar from "@/components/Header-3";

export default function Tailors() {
  // State to toggle the mobile menu
  
  
  const teamMembers = [
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-4.png", 
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-5.png", 
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-6.png", 
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-3.png", 
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-7.png", 
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-1.png", 
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-2.png", 
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-8.png", 
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-9.png", 
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
  ];


  return (
    <div>
      <div className="min-h-screen bg-white">
      <Navbar />
      {/* Header Section */}
      <div className="text-center py-12 bg-white">
        <p className="text-gray-500 uppercase tracking-wide text-sm">What we do</p>
        <h1 className="text-5xl font-bold mt-2">Innovation tailored for you</h1>
        <nav className="mt-4">
          <Link href="/" className="text-gray-500 text-sm">
            Home
          </Link>{" "}
          <span className="text-gray-500 mx-1">/</span>{" "}
          <Link href="/team" className="text-gray-500 text-sm">
            Team
          </Link>
        </nav>
      </div>

      {/* Boxes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 lg:px-20">
        {/* Box 1: Single Image */}
        <div>
          <Image
            src="/images/tailor-1.png"
            alt="Single Image"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Box 2: Grid of 4 Images */}
        <div className="grid grid-cols-2 gap-2">
          <Image
            src="/images/tailor-2.png"
            alt="Grid Image 1"
            width={200}
            height={250}
            className="w-full h-full object-cover"
          />
          <Image
            src="/images/tailor-3.png"
            alt="Grid Image 2"
            width={200}
            height={250}
            className="w-full h-full object-cover"
          />
          <Image
            src="/images/tailor-4.png"
            alt="Grid Image 3"
            width={200}
            height={250}
            className="w-full h-full object-cover"
          />
          <Image
            src="/images/tailor-5.png"
            alt="Grid Image 4"
            width={200}
            height={250}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-16">
    <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
    <p className="text-sm text-gray-600 mb-24 text-center px-4">
      Problems trying to resolve the conflict between <br /> the two major realms of
      Classical physics: Newtonian mechanics
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-0" 
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-60 h-48 object-cover mb-6" 
          />
          <h2 className="text-base font-semibold mb-4">{member.name}</h2> 
          <p className="text-sm font-semibold text-gray-500 mb-4">{member.profession}</p>
          <div className="flex space-x-4 mb-4"> 
            <a
              href={member.social.facebook}
              target="_blank"
              className="text-[#14a2f5] hover:text-blue-700"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={member.social.instagram}
              target="_blank"
              className="text-[#14a2f5] hover:text-pink-700"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href={member.social.twitter}
              target="_blank"
              className="text-[#14a2f5] hover:text-blue-600"
              rel="noopener noreferrer"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      ))}
    </div>
    {/* Call to Action Section */}
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-10">
          <h1 className="text-4xl font-bold text-gray-800">Start your 14 days free trial</h1>
          <p className="text-gray-500 text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met sent.
            RELIT official consequent.
          </p>

          {/* Button */}
          <button className="flex items-center px-6 py-3 bg-[#14a2f5] text-white text-sm rounded-md font-medium w-fit mx-auto">
            Try it free now
          </button>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-[#1DA1F2] w-8 h-8 cursor-pointer hover:scale-110 transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-[#1877F2] w-8 h-8 cursor-pointer hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#E1306C] w-8 h-8 cursor-pointer hover:scale-110 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[#0077B5] w-8 h-8 cursor-pointer hover:scale-110 transition" />
            </a>
          </div>
        </div>
  </div>
  </div>
  <Footer />
  </div>
  );
}
