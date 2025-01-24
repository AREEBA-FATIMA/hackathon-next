import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

export default function PricingFaq() {
  return (
    <div>
      <div className="py-8 px-4 md:px-12 lg:px-60">
        <h1 className="text-3xl font-bold mb-8 text-center">Pricing FAQs</h1>
        <p className="text-base text-center mb-20">
          Problems trying to resolve the conflict between <br /> the two major realms of
          Classical physics
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {[...Array(6)].map((_, index) => (
            <div className="flex" key={index}>
              {/* Icon */}
              <div className="pt-1">
                <span className="mr-2 text-[#14a2f5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
              {/* FAQ Content */}
              <div className="ml-2">
                <h2 className="text-base font-bold mb-4 flex items-center">
                  <Link href="#">The quick fox jumps over the lazy dog</Link>
                </h2>
                <p className="text-sm mb-2">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                  RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                  consequent sent nostrum met.
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-16">
          Haven&apos;t got your answer? <Link href="#">Contact our support</Link>
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="min-h-screen flex items-center justify-center bg-white">
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
  );
}
