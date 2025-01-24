import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-6">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-900">Bandage</h1>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-[#14a2f5]">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="#" className="text-[#14a2f5]">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-[#14a2f5]">
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="flex justify-around">
          {/* Links Section */}
          <div className="w-11/12 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-1 py-6 text-gray-800">
            {/* Column 1 */}
            <div className="text-left sm:text-left">
              <h3 className="font-bold mb-10 text-sm">Company Info</h3>
              <ul className="mt-3 space-y-1">
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">About Us</a></li>
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">Carrier</a></li>
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">We are hiring</a></li>
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">Blog</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="text-left sm:text-left">
              <h3 className="font-bold mb-10 text-sm">Legal</h3>
              <ul className="mt-3 space-y-1">
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">About Us</a></li>
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">Carrier</a></li>
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">We are hiring</a></li>
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">Blog</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="text-left sm:text-left">
              <h3 className="font-bold mb-10 text-sm">Features</h3>
              <ul className="mt-3 space-y-1">
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">Business Marketing</a></li>
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">User Analytics</a></li>
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">Live Chat</a></li>
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">Unlimited Support</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="text-left sm:text-left">
              <h3 className="font-bold mb-10 text-sm">Resources</h3>
              <ul className="mt-3 space-y-1">
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">iOS & Android</a></li>
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">Watch a Demo</a></li>
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">Customers</a></li>
                <li><a href="#" className="hover:text-[#14a2f5] text-xs font-semibold">API</a></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div className="text-left sm:text-left">
              <h3 className="font-bold mb-10 text-sm">Get In Touch</h3>
              <form className="mt-3">
                <div className="flex items-center justify-center sm:justify-start">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-4/6 sm:w-3/4 px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-2/6 px-3 py-3 text-xs bg-[#14a2f5] text-white font-medium hover:bg-blue-600"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor amet.</p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-left text-xs font-bold text-gray-500 mt-6">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
}
