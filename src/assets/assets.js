import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import Frontend from "./front-end.jpg";
import profile_img from "./profile-img.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";

export const assets = {
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  profile_img,
  hand_icon,
  header_bg_color,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  Frontend,
};

export const workData = [
  {
    title: "full-stack project",
    description: "وب سایت پورتفولیو پیاده شده با Next Js.",
    bgImage: "/work-1.png",
    link: "",
  },
  {
    title: "full-stack project",
    description:
      "پیاده سازی کتاب 504 کلمه ضروری انگلیسی، یادگیری گام به گام و ...",
    bgImage: "/work-2.png",
    link: "https://github.com/mojavadb/essential-words-book",
  },
  {
    title: "مار بازی",
    description: "پیاده شده با html, css, js خالی. مناسب برای اوقات خالی!",
    bgImage: "/work-3.png",
    link: "https://snake-game-fawn-two.vercel.app",
  },
  {
    title: "",
    description: "",
    bgImage: "/work-4.png",
    link: "",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "توسعه وب",
    description:
      "طراحی و توسعه کامپوننت های ریکت برای استفاده در توسعه وب و...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "برنامه نویسی",
    description:
      "ارتباط بین بک اند و فرانت اند، مدیریت داده در سمت کاربر، برنامه نویسی با زبان های پایه و...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "طراحی قالب",
    description:
      "طراحی قالب از روی سایت خاص، طراحی قالب از روی فایل فیگما و ...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "زبان ها",
    description: "HTML, CSS, JavaScript, TypeScript, C-sharp",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "کتابخانه ها",
    description: "React Js, Tailwind Css, BootStrap Css, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "تحصیلات",
    description: "کارشناسی مهندسی کامپیوتر، 1402 - الان",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
