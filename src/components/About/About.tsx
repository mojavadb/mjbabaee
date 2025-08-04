import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "motion/react";

function About() {
  const { isDarkMode } = useTheme();

  return (
    <div id="about" className="w-full scroll-mt-15 px-[12%] py-8">
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
        درباره من
      </motion.h4>

      <div className="flex w-full flex-col md:flex-row items-start lg:items-center gap-20 my-12">
        <div className="flex-1">
          <motion.h4
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`text-lg mb-2`}
          >
            مقدمه
          </motion.h4>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className={`text-gray text-justify text-base mb-10 max-w-3xl`}
          >
            من یک توسعه دهنده فرانت اند هستم که اشتیاق زیادی به پیدا کردن راه حل
            های نوآورانه دارم. از همکاری با تیم های چند وظیفه ای برای ارائه
            محصولات با کیفیت بالا لذت می برم. متعهد به یادگیری مداوم و به روز
            ماندن با آخرین روند های صنعت هستم. زیرا معتقدم که کنجکاوی و سازگار
            ماندن، کلید موفقیت در چشم انداز فناوری همواره در حال تکامل است.
          </motion.p>

          <motion.ul
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-2xl mb-3"
          >
            {infoList.map(({ icon, iconDark, description, title }, index) => (
              <li
                key={index}
                className={`border border-stone-400 px-4 py-5 rounded-xl 
                  cursor-pointer hover:-translate-y-1
                  hover:-translate-x-1 duration-300
                  ${
                    isDarkMode
                      ? "shadow-white hover:bg-zinc-900"
                      : "shadow-black hover:bg-zinc-100"
                  }`}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="mt-2 w-6"
                />
                <h3 className="text-xl my-4">{title}</h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {description}
                </p>
              </li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className={`my-6 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}
          >
            ابزار های مورد استفاده:
          </motion.h4>

          <motion.ul
            className="flex items-center gap-3 sm:gap-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {toolsData.map((tool, index) => (
              <li
                className={`flex items-center justify-center w-12 sm:w-14 aspect-square
                  border border-slate-300 p-2 rounded-md cursor-pointer
                  hover:-translate-y-1 hover:-translate-x-1 duration-300
                  ${isDarkMode ? "shadow-white" : "shadow-black"}`}
                key={index}
              >
                <Image
                  src={tool}
                  alt="icon for each tool"
                  className="w-5 sm:w-7"
                />
              </li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full px-5 sm:w-80 sm:px-0 rounded-3xl max-w-none opacity-95"
        >
          <Image
            src={assets.Frontend}
            alt="HTML, CSS, JS"
            className="w-full rounded-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
