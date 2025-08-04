import { Mail, Smartphone } from "lucide-react";
import React from "react";
import NameLogo from "../Navbar/NameLogo";

function Footer() {
  return (
    <div className="mt-15" id="footer">
      <div className="text-center">
        <NameLogo className="my-3 mx-auto text-center" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="w-max flex items-center gap-1">
            <span className="mt-1">۰۹۱۰۱۳۹۸۲۱۱</span>
            <Smartphone size={20} />
          </div>
          <div className="w-max flex items-center gap-1">
            <span className="mt-1">m.j.babaee۹۸@gmail.com</span>
            <Mail size={20} />
          </div>
        </div>
      </div>

      <div
        className="sm:flex items-center justify-between border-t border-gray-400 
      mx-[10%] mt-10 py-5"
      >
        <ul className="flex flex-col md:flex-row gap-4 my-4 md:gap-8 md:my-0">
          <li>
            <a target="_blank" href="https://github.com/mojavadb">
              گیت هاب
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/mojavadb">
              <span>لینکدین</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/mojavadb98">
              تلگرام
            </a>
          </li>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
