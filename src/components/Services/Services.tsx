import React from "react";
import { serviceData } from "@/assets/assets";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { MoveLeft } from "lucide-react";
import { motion } from "motion/react";

function Services() {
  const { isDarkMode } = useTheme();
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="services">
      <motion.h6
        className={`text-center text-lg text-gray mb-3`}
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        -
      </motion.h6>
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`text-center text-5xl`}
      >
        خدمات من
      </motion.h4>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        با حدود دو سال تجربه در توسعه فرانت اند، آماده برای ارائه خدمات برای کمک
        به شما در زمینه های مختلف هستم.
      </motion.p>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 my-10 gap-6`}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className={`rounded-lg px-6 py-8 border-2 
                    hover:shadow-md hover:-translate-y-1 duration-400 cursor-pointer 
                    ${
                      isDarkMode
                        ? "bg-darkTheme border-gray-800"
                        : "bg-white border-gray-200"
                    }`}
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3
              className={`text-lg my-4 font-medium 
                        ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
            >
              {title}
            </h3>
            <p className="text-sm text-gray-500 leading-5 mb-3">
              {description}
            </p>
            <a
              href={link}
              className={`text-sm flex items-center gap-2 ${
                isDarkMode ? "text-blue-600" : "text-blue-400"
              }`}
            >
              <span className="font-medium">بیشتر</span>
              <MoveLeft />
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
