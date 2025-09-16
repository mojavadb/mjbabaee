"use client";

import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { ArrowUpRight, CircleX, Menu, Moon, Sun } from "lucide-react";
import NameLogo from "./NameLogo";

export default function Navbar() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const [isScroll, setIsScroll] = React.useState<boolean>(false);

  const sideMenuRef = React.useRef<HTMLUListElement>(null);

  function openMenu() {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(+100%)";
    }
  }
  function closeMenu() {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-100%)";
    }
  }

  React.useEffect(function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      {!isDarkMode && (
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-75%]">
          <Image
            src={assets.header_bg_color}
            alt="header background color"
            className="w-full h-auto"
          />
        </div>
      )}

      <nav
        className={`w-full sticky top-0 px-5 lg:px-8 xl:px-[8%] py-4 z-250
        flex items-center justify-between
        ${
          isScroll &&
          (isDarkMode
            ? "border-b-1 border-gray-500 bg-darkTheme"
            : "bg-white-500 backdrop-blur-xl shadow-sm")
        }`}
      >
        <a href="#top">
          <NameLogo className="ml-24" />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
            ${
              !isScroll &&
              (isDarkMode
                ? "border-1 border-purple-800"
                : "shadow-md bg-red-50")
            }`}
        >
          <li>
            <a href="#top" className={`hover:border-b-2 border-stone`}>
              معرفی
            </a>
          </li>
          <li>
            <a href="#about" className={`hover:border-b-2 border-stone`}>
              درباره
            </a>
          </li>
          <li>
            <a href="#services" className={`hover:border-b-2 border-stone`}>
              خدمات
            </a>
          </li>
          <li>
            <a href="#work" className={`hover:border-b-2 border-stone`}>
              کارها
            </a>
          </li>
          <li>
            <a href="#contact" className={`hover:border-b-2 border-stone`}>
              ارتباط
            </a>
          </li>
        </ul>

        <div className="flex align-center gap-5">
          <button
            className="cursor-pointer"
            onClick={() => setIsDarkMode((isDarkMode) => !isDarkMode)}
          >
            {isDarkMode ? <Sun color="#ede" /> : <Moon color="#343" />}
          </button>

          <a
            href="#footer"
            className={`hidden lg:flex items-center gap-2
                px-5 py-2 border-1 rounded-full ml-4 ${
                  isDarkMode ? "border-gray-300 border-x-2" : "border-gray-500"
                }`}
          >
            <span className="text-sm">صفحات مجازی</span>
            <ArrowUpRight size={20} color={isDarkMode ? "#ede" : "#343"} />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Menu color={isDarkMode ? "#ede" : "#343"} />
          </button>
        </div>
      </nav>

      {/* این بخش برای منوی موبایل است */}

      <ul
        ref={sideMenuRef}
        className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -left-full
        top-0 bottom-0 w-full z-250 h-screen transition duration-800
        ${isDarkMode ? "bg-darkHover" : "bg-lightHover"}`}
      >
        <button className="absolute left-18 top-15" onClick={closeMenu}>
          <CircleX size={20} color={isDarkMode ? "#ede" : "#343"} />
        </button>

        <li>
          <a href="#top" onClick={closeMenu}>
            معرفی
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            درباره
          </a>
        </li>
        <li>
          <a href="#services" onClick={closeMenu}>
            خدمات
          </a>
        </li>
        <li>
          <a href="#work" onClick={closeMenu}>
            کارها
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            ارتباط
          </a>
        </li>
        <li>
          <a href="#footer" onClick={closeMenu}>
            صفحات مجازی
          </a>
        </li>
      </ul>
    </>
  );
}
