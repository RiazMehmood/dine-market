"use client";
import Image from "next/image";
import { Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Cart from "../ui/Cart";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="mx-2 -mt-6 md:mt-0 mr-4 md:flex md:items-center justify-between ">
      <div className="ml-14">
        {/* Logo */}
        <div className="mt-4 -ml-10 invisible md:visible">
          <Link href={"/"}>
          <Image
            src={"/Logo.webp"}
            alt="website logo"
            width={150}
            height={150}
            />
            </Link>
        </div>
        {/* Hamburger Menu Mobile */}
        <div>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <Image src="/close.svg" width={30} height={30} alt="logo" />
              ) : (
                <Image
                  src="/hamburger-menu.svg"
                  width={30}
                  height={30}
                  alt="logo"
                  className="focus:border-none active:border-none"
                />
              )}
            </button>
          </div>
          {/* Menu End */}
        </div>
      </div>
      <div
        className={`md:flex md:flex-1 md:text-lg justify-center gap-6 pb-3 mt-8 mr-8 ${
          navbar ? "px-12 md:p-0 flex flex-col md:flex-row" : "hidden"
        }`}
      >
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
        <div>
          {/* <div className='md:flex invisible md:visible mr-4'>
            <Search className="bg-white rounded-l" />
            <input
              type="text"
              placeholder="What you are looking for"
              className="rounded-r border-2 h-6"
            ></input>
          </div> */}
        </div>
      </div>
      <div className="flex justify-end -mt-12 md:mt-2">
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
