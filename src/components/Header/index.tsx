"use client";

import Link from "next/link";
import React from "react";
import Logo from "@/assets/images/logo-samawa.svg";
import { usePathname } from "next/navigation";

type Props = {
  hasPadding?: boolean;
};

function Header({hasPadding}: Props) {
  const pathname = usePathname();

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
    <header className={["flex justify-between container mx-auto items-center px-16",
     hasPadding ? "p-5 bg-white rounded-2xl px-5" : "pt-8"]
     .join(" ")}>
      <span className="flex gap-x-3 items-center">
        <span className="text-color2">
          <Logo />
        </span>
        <span className="text-2xl font-bold cursor-default">Samawa</span>
      </span>
      <ul className="flex gap-x-10">
        {
          mainMenus.map( (menu) => {
            let isActive = false;
            if (!!menu.slug) {
              if (
                pathname === menu.slug ||
                (pathname.startsWith(menu.slug) && pathname.charAt(menu.slug.length) === "/") 
              )
                isActive = true; 
            }
          
          return <li key={menu.key}>
              <Link
                href={menu.slug}
                
                className={["hover:underline", isActive ? "font-bold text-color2" : ""].join(" ")}
                aria-current={isActive ? "true" : "false"}
              >
                {menu.label}
              </Link>
            </li>
          })
        }
      </ul>
      <ul className="flex gap-x-4">
        <li>
          <Link
            href="/contacts"
            className="border border-dark1 px-5 py-3 rounded-full font-semibold hover:bg-color2 hover:text-light1 transition duration-300 ease-in-out hover:border-light1"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            href="/bookings"
            className="border transparent bg-color2 text-light1 px-5 py-3 rounded-full font-semibold transition duration-300 ease-in-out hover:border-dark1"
          >
            My Booking
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
