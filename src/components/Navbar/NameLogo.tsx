import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { Lobster } from "next/font/google";

const cairo = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

function NameLogo({ className }: { className: string }) {
  const { isDarkMode } = useTheme();
  return (
    <div className={`text-2xl ${cairo.className} ${className}`}>
      <span className="text-[#fd0e24]">.</span>
      <span className={`${isDarkMode ? "#e9e9dd" : "#010"} mx-1`}>
        Mo Javad
      </span>
    </div>
  );
}

export default NameLogo;
