"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/assets/images/logo-samawa.svg";
import { usePathname } from "next/navigation";

type Props = {
  hasPadding?: boolean;
};

function Header({ hasPadding }: Props) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log("Mobile menu state:", !isMobileMenuOpen);
  };

  const mainMenus = [
    {
      key: "homepage",
      label: "Home",
      slug: "/",
    },
    {
      key: "category",
      label: "Category",
      slug: "/categories",
    },
    {
      key: "packages",
      label: "Packages",
      slug: "/packages",
    },
    {
      key: "testimonials",
      label: "Testimonials",
      slug: "/testimonials",
    },
  ];

  return (
    <header
      className={[
        "relative flex justify-between container mx-auto items-center -my-1 px-16 max-sm:px-8 max-sm:w-full",
        hasPadding ? "p-5 bg-white rounded-2xl px-5 z-20" : "pt-8",
      ].join(" ")}
    >
      <div className="flex gap-x-3 items-center">
        <span className="text-color2">
          <Logo />
        </span>
        <span className="text-2xl font-bold cursor-default">Samawa</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-x-10">
        {mainMenus.map((menu) => {
          const isActive =
            pathname === menu.slug ||
            (pathname.startsWith(menu.slug) &&
              pathname.charAt(menu.slug.length) === "/");
          return (
            <Link
              key={menu.key}
              href={menu.slug}
              className={`text-md hover:underline ${
                isActive ? "text-color2 font-bold" : ""
              }`}
            >
              {menu.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-slate-600 hover:text-color2 focus:outline-none focus:ring-2 focus:ring-color2"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-50 shadow-lg py-4 z-50">
          <nav className="flex flex-col items-center gap-4">
            {mainMenus.map((menu) => (
              <Link
                key={menu.key}
                href={menu.slug}
                className="text-lg font-medium text-slate-600 hover:text-color2 hover:font-semibold transition duration-300 w-full text-center py-2"
                onClick={toggleMobileMenu}
              >
                {menu.label}
              </Link>
            ))}
            <Link
              href="/contacts"
              className="px-6 py-3 text-base font-semibold text-color2 hover:bg-indigo-100 transition duration-300 w-full text-center"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
            <Link
              href="/bookings"
              className="px-6 py-3 text-base font-semibold text-white bg-color2 hover:bg-indigo-100 hover:text-color2 transition duration-300 w-full text-center"
              onClick={toggleMobileMenu}
            >
              My Booking
            </Link>
          </nav>
        </div>
      )}

      {/* Desktop Contact and Booking Buttons */}
      <div className="flex items-center gap-x-4 max-sm:hidden">
        <Link
          href="/contacts"
          className="border border-dark1 px-5 py-3 rounded-full font-semibold hover:bg-color2 hover:text-light1 transition duration-300 ease-in-out hover:border-light1"
        >
          Contact Us
        </Link>
        <Link
          href="/bookings"
          className="border transparent bg-color2 text-light1 px-5 py-3 rounded-full font-semibold transition duration-300 ease-in-out hover:border-dark1"
        >
          My Booking
        </Link>
      </div>
    </header>
  );
}

export default Header;
