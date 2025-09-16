import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "motion/react";
import { Download, MoveLeft } from "lucide-react";

export default function Header() {
  const { isDarkMode } = useTheme();

  return (
    <div
      id="top"
      className="max-w-3xl mx-auto text-center w-11/12 my-12 flex flex-col 
      justify-center items-center gap-4 scroll-mt-30"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", damping: 10, stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Profile image in header"
          className="rounded-full w-32 h-32"
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex justify-center items-center gap-2 text-xl md:text-2xl mb-3"
      >
        <span>سلام! محمد جواد بابایی هستم.</span>
        <Image
          src={assets.hand_icon}
          alt="hand icon for design"
          className="w-6 h-6"
        />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className={`text-3xl sm:text-5xl lg:text-[50px] font-semibold`}
      >
        توسعه دهنده فرانت اند و برنامه نویس
      </motion.h1>

      <motion.p
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="max-w-2xl mx-auto my-4"
      >
        من به طراحی و توسعه برنامه‌های وب تعاملی و کاربرپسند علاقه‌مندم. به
        فناوری‌های پایه فرانت‌اند مسلط هستم و تجربه کار با تکنولوژی‌های مدرن
        برنامه‌نویسی سمت کاربر را دارم. همچنین، علاقه‌مندم در پروژه‌های بزرگ و
        هیجان‌انگیز مشارکت داشته باشم.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-3">
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          href="#contact"
          className={`px-6 py-2 border border-white rounded-full text-white 
        flex items-center gap-2 ${isDarkMode ? "bg-transparent" : "bg-black"}`}
        >
          <span>ارتباط با من</span>
          <MoveLeft size={20} />
        </motion.a>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          href="/sample-resume.pdf"
          download
          className={`px-6 py-2 border border-gray-500 rounded-full flex items-center gap-2
        ${isDarkMode ? "bg-indigo-50 text-black" : ""}`}
        >
          <span>رزومه من</span>
          <Download size={20} />
        </motion.a>
      </div>
    </div>
  );
}
