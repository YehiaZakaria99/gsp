// import React from "react";
import { useEffect, useState } from "react";
import ScrollUp from "../../Components/Scroll/ScrollUp";
import { cn } from "../../lib/utils";
import AboutSection from "../../Sections/AboutSection";
import LeadershipSection from "../../Sections/LeadershipSection";
import OurSolutionsSection from "../../Sections/OurSolutionsSection";
import HeroSection from "./../../Sections/HeroSection";
import WhyChooseUs from "./../../Sections/WhyChooseUs";
import ContactSection from "../../Sections/ContactSection";
import GallerySection from "./../../Sections/GallerySection";
import GalleryContextProvider from "../../Context/GalleryContext";
import IntroOverlay from "../../Components/IntroOverlay/IntroOverlay";
import Loading from "./../../Components/Loading/Loading";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY >= 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={cn("relative", "", "")}>
        <HeroSection />
        <LeadershipSection />
        <AboutSection />
        <WhyChooseUs />
        <OurSolutionsSection />

        <GalleryContextProvider>
          <GallerySection />
        </GalleryContextProvider>

        <ContactSection />
        {/* <Loading /> */}
        {isScrolled && <ScrollUp to="heroSection" />}
      </div>
    </>
  );
}
