"use client";
import Image from "next/image";
import { Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Cart from "../ui/Cart";
import Dropdown from "../ui/dropDown";

//  className={`md:flex md:flex-1 md:text-lg justify-center gap-6 pb-3 mt-8 mr-8 ${
//   navbar ? "px-12 md:p-0 flex flex-col md:flex-row" : "hidden"
// }`}

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="flex items-center justify-center my-8 md:my-11 lg:justify-start lg:items-center">
      <div className="flex w-screen justify-around md:justify-between md:mx-10 lg:max-w-[14%] lg:flex-start items-center">
        <div className="">
          {/* Logo */}
          <div className="flex item-center">
            <Link href={"/"}>
              <Image
                src={"/Logo.webp"}
                alt="website logo"
                width={140}
                height={25}
              />
            </Link>
          </div>
        </div>
        <div className="lg:hidden backdrop-blur-xl bg-white">
          {/* Redix UI Dropdown */}
          <Dropdown />
        </div>
      </div>
      <div className="hidden lg:flex lg:w-full lg:justify-around">
        <div className="px-2 py-3 flex-wrap font-semibold text-blue-500 md:text-black/60 md:py-0 ">
          <Link href="/category/Male" onClick={() => setNavbar(!navbar)}>
            Male
          </Link>
        </div>
        <div className="px-2 py-3 font-semibold text-blue-500 md:text-black/60 md:py-0">
          <Link href="/category/Female" onClick={() => setNavbar(!navbar)}>
            Female
          </Link>
        </div>
        <div className="px-2 py-3 font-semibold text-blue-500 md:text-black/60 md:py-0">
          <Link href="/category/Kids" onClick={() => setNavbar(!navbar)}>
            Kids
          </Link>
        </div>
        <div className="px-2 py-3 font-semibold text-blue-500 md:text-black/60 md:py-0">
          <Link href="/products" onClick={() => setNavbar(!navbar)}>
            All Products
          </Link>
        </div>

        <div className="md:flex invisible md:visible mr-4">
          <Search className="bg-white rounded-l" />
          <input
            type="text"
            placeholder="What you are looking for"
            className="rounded-r border-2 h-6"
          ></input>
        </div>
        <div className="">
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
