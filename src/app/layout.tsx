import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "portfolio - MoJavad",
  description: "front-end react developer - computer engineering of UT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body
        className={`${vazirmatn.className} antialiased 
        leading-7`}
        cz-shortcut-listen="true"
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
