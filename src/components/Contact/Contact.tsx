"use client";

import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { motion } from "motion/react";

interface FormData {
  fullName: string;
  email: string;
  message: string;
  isSending: boolean;
}

function Contact() {
  const [formData, setFormData] = React.useState<FormData>({
    fullName: "",
    email: "",
    message: "",
    isSending: false,
  });
  const { fullName, email, message, isSending } = formData;

  const { isDarkMode } = useTheme();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setFormData({ ...formData, isSending: true });
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "48a8fada-f008-402e-b9fd-9234771169a7",
        name: fullName,
        email: email,
        message: message,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
    setFormData({ fullName: "", email: "", message: "", isSending: false });
  }

  return (
    <div
      id="contact"
      className={`w-full scroll-mt-20 px-[12%] py-10 bg-no-repeat
        ${
          isDarkMode
            ? ""
            : "bg-[url('/footer-bg-color.png')] bg-[length:90%_auto]  bg-cover"
        }`}
    >
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
        ارتباط با من
      </motion.h4>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        من در دسترس هستم و خوشحال می‌شوم از شما بشنوم! اگر سؤال، نظر یا بازخوردی
        دارید، لطفاً از فرم زیر استفاده کنید.
      </motion.p>
      <motion.form
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-2xl mx-auto"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: 5, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            value={fullName}
            className={`rounded-md flex-1 p-3 outline-none border-gray-400
                    ${
                      isDarkMode
                        ? "border-1 bg-darkTheme"
                        : "border-[0.5px] bg-white"
                    }`}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            type="text"
            placeholder="نام و نام خانوادگی"
            required
          />
          <motion.input
            initial={{ x: -5, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            value={email}
            className={`rounded-md flex-1 p-3 outline-none border-gray-400
                    ${
                      isDarkMode
                        ? "border-1 bg-darkTheme"
                        : "border-[0.5px] bg-white"
                    }`}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            placeholder="ایمیل"
            required
          />
        </div>

        <textarea
          value={message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={4}
          placeholder="پیام شما..."
          required
          className={`w-full p-4 outline-none border-gray-400 rounded-md mb-6
            ${
              isDarkMode ? "border-1 bg-darkTheme" : "border-[0.5px] bg-white"
            }`}
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className={`bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg
                cursor-pointer`}
          >
            فرستادن
          </button>
        </div>

        <p
          className={`text-center text-sm mt-3 ${
            isDarkMode ? "text-gray-600" : "text-gray-400"
          }`}
        >
          {isSending && "در حال ارسال..."}
        </p>
      </motion.form>
    </div>
  );
}

export default Contact;
