import React from "react";
import { workData } from "@/assets/assets";
import { useTheme } from "@/contexts/ThemeContext";
import { Send } from "lucide-react";
import { motion } from "motion/react";

function Work() {
  const { isDarkMode } = useTheme();

  return (
    <div id="work" className="w-full scroll-mt-20 px-[12%] py-10">
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
        نمونه کار ها
      </motion.h4>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        به بخش نمونه کار های من خوش آمدید! در این بخش کار های اخیر من قرار دارند
        و شما میتوانید آنها را مشاهده کنید.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-10 gap-5 md:gap-8"
      >
        {workData.map(({ title, description, bgImage, link }, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${bgImage})` }}
            className={`aspect-square bg-no-repeat bg-cover bg-center rounded-lg
            cursor-pointer relative group ${isDarkMode ? "opacity-80" : ""}`}
          >
            <div
              className={`rounded-lg absolute w-10/12 bottom-5 left-1/2 
              -translate-x-1/2 p-3 duration-500 flex items-center justify-between
              border-t-1 border-b-4 border-x-2 border-white
              group-hover:bottom-8 group-hover:border-neutral-300
              bg-white ${title === "" ? "hidden" : ""}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-semibold text-md text-black mt-1">
                    {title}
                  </h2>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Send color="#212" size={20} />
                  </div>
                </div>
                <p
                  className={`mb-3 text-xs ${
                    isDarkMode ? "text-gray-700" : "text-stone-700"
                  }`}
                >
                  {description}
                </p>
                <div className="flex items-center justify-center text-xs text-white">
                  <a href={link} className="p-1 bg-red-700 rounded-sm">
                    آدرس سایت
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Work;
