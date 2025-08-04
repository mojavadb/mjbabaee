"use client";

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Work from "@/components/Work/Work";
import { ThemeProvider } from "@/contexts/ThemeContext";
import React from "react";

export default function HomePage() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}
