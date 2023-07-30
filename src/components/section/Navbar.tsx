"use client";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Cart from "../ui/Cart";
import Logo from "../ui/logo";
import Providers from "@/app/providers";
import { NavbarData, Nav } from "../ui/navData";
import DropDownList from "../ui/dropDownList";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <Providers>
      <div>
        <div className="flex items-center justify-between my-4 sm:my-8 lg:my-10 px-4 md:my-11 lg:justify-between lg:items-center">
          {/* logo n dropdown */}
          <div className="flex flex-shrink-0">
            {/* Logo */}
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          {/* Categories */}
          <div className="hidden lg:flex px-2 py-3 flex-wrap space-x-14 lg:text-md md:text-md font-semibold text-blue-500 md:text-black/60 md:py-0 ">
            {NavbarData.map((item: Nav) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setNavbar(!navbar)}
              >
                {item.title}
              </Link>
            ))}
          </div>
          {/* Search Bar */}
          <div className="items-center mr-4 hidden lg:flex">
            <Search className="bg-white rounded-l" />
            <input
              type="text"
              placeholder="What are you looking for"
              className="rounded-r w-72 border-2 h-8"
            ></input>
          </div>
          {/* Cart Icon */}
          <div className="hidden lg:flex">
            <Cart />
          </div>
          <div className="hidden lg:flex">
            <UserButton />
          </div>

          {/* dropdown */}
          <div
            className="lg:hidden flex backdrop-blur-xl bg-white"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <X size={32} strokeWidth={2.25} />
            ) : (
              <Menu size={32} strokeWidth={2.25} />
            )}
            {/* <h1 className="text-2xl font-bold text-center">...</h1> */}
          </div>
        </div>
        <div>
          {navbar ? <DropDownList navbar={navbar} setNavbar={setNavbar} /> : ""}
        </div>
      </div>
    </Providers>
  );
};

export default Navbar;
