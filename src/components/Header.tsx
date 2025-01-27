"use client";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaCartPlus } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FiUser, FiHeart } from "react-icons/fi";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useRouter } from "next/navigation";
import { RootState } from '@/app/redux/store';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [routerReady, setRouterReady] = useState(false); // Ensure router is ready
  const [isSearchVisible, setIsSearchVisible] = useState(false); // State to toggle search bar visibility on small/medium screens
  const router = useRouter();
  const item = useSelector((state: RootState) => state.cart.items);

  // Ensuring router and client-only code is ready
  useEffect(() => {
    setRouterReady(true); // Enable router usage after mounting
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!routerReady) return; // Skip if router isn't ready
    const formData = new FormData(e.currentTarget);
    const query = formData.get("searchQuery")?.toString().trim();

    if (query) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  if (!routerReady) {
    return null; // Prevent rendering before client-side code is ready
  }

  return (
    <ClerkProvider>
      <header className="relative bg-white border-b">
        {/* Top Header */}
        <div className="bg-[#04875b] text-xs text-white px-8 py-2 lg:flex justify-between items-center hidden md:flex">
          <div className="flex items-center">
            <span className="mr-10 flex items-center">
              <FaPhoneAlt className="mr-2" /> +92314-7837079
            </span>
            <span className="flex items-center">
              <FaEnvelope className="mr-2" /> areebafatima2457@gmail.com
            </span>
          </div>
          <div className="font-semibold">
            Follow Us and get a chance to win 80% off
          </div>
          <div className="flex space-x-4 items-center">
            <span className="font-semibold">Follow Us:</span>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Navbar */}
        <nav className="bg-white p-4 flex justify-between items-center z-10">
          <div className="flex justify-center items-center space-x-10">
            <div className="text-2xl font-bold text-black">Bandage</div>

            {/* Desktop View: Show Navigation Links */}
            <ul className="hidden md:flex font-semibold items-center text-gray-600 space-x-4">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>

              {/* Shop Dropdown */}
              <li>
                <NavigationMenu>
                  <NavigationMenuList className="flex space-x-4">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-base">
                        <Link href="/shop">Shop</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink href="/shop" className="block py-2 px-6 text-xs center">
                          Product
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/pricing" className="block py-2 px-6 text-xs center">
                          Pricing
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/contact" className="block py-2 px-6 text-xs center">
                          Contact
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>

              <li>
                <Link href="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:underline">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
              <li>
                <Link href="/teams" className="hover:underline">Team</Link>
              </li>
            </ul>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            {/* Clerk Authentication */}
            <SignedOut>
              <SignInButton mode="modal">
                <div className="hidden lg:flex items-center space-x-2">
                  <FiUser className="text-[#45bbed]" />
                  <Link href="#" className="hover:underline text-[#45bbed]">Login / Register</Link>
                </div>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            {/* Search Bar for Large Screens */}
            <div className="hidden md:flex items-center space-x-2">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center"
              >
                <input
                  name="searchQuery"
                  type="text"
                  placeholder="Search..."
                  className="p-2 border border-gray-300 rounded-md"
                />
                <button
                  type="submit"
                  className="p-2 bg-[#45bbed] text-white rounded-md hover:bg-[#3496d1]"
                >
                  <IoMdSearch />
                </button>
              </form>
            </div>

            {/* Search Icon for Small/Medium Screens */}
            <div className="md:hidden text-[#45bbed] relative">
              <button
                onClick={toggleSearchBar}
                className="p-2 bg-[#45bbed] text-white rounded-md hover:bg-[#3496d1]"
              >
                <IoMdSearch />
              </button>
            </div>

            {/* Search Bar for Small/Medium Screens */}
            {isSearchVisible && (
              <div className="md:hidden absolute top-16 left-0 lg:w-full w-80 bg-white shadow-lg">
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex items-center p-2"
                >
                  <input
                    name="searchQuery"
                    type="text"
                    placeholder="Search..."
                    className="w-[90%] max-w-[280px] p-2 border border-gray-300 rounded-md mx-auto"  // Reduced width for small screens
                  />
                  <button
                    type="submit"
                    className="p-2 bg-[#45bbed] text-white rounded-md hover:bg-[#3496d1]"
                  >
                    <IoMdSearch />
                  </button>
                </form>
              </div>
            )}

            {/* Cart Icon */}
            <Link href="/cart" className="text-[#45bbed]">  
              <div className="flex items-center space-x-1">
                <FaCartPlus className="text-[#45bbed]" />
                <span className="text-[#45bbed]">{item.length}</span>
              </div>
            </Link>

            {/* Favorite Icon */}
            <div className="hidden md:flex items-center space-x-1">
              <FiHeart className="text-[#45bbed]" />
              <span className="text-[#45bbed]">1</span>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-[#45bbed]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-20">
            <ul className="space-y-4 text-center py-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/shop" className="hover:underline">Shop</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/blogs" className="hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/teams" className="hover:underline">Team</Link></li>
            </ul>
          </div>
        )}
      </header>
    </ClerkProvider>
  );
};

export default Header;
