import { useEffect } from "react";
import img1 from "/HomePage/HeroSection/1.webp";
import img2 from "/HomePage/HeroSection/2.webp";
import img3 from "/HomePage/HeroSection/3.webp";
import img4 from "/HomePage/HeroSection/4.webp";

import { cn } from "../lib/utils";
import { Link } from "react-scroll";

import { TypeAnimation } from "react-type-animation";
import Slider from "react-slick";
import ScrollDown from "./../Components/Scroll/ScrollDown";
import IntroOverlay from './../Components/IntroOverlay/IntroOverlay';

const slides = [img1, img2, img3, img4];

export default function HeroSection() {
  // Preload images
  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: false,
    pauseOnHover: false,
    beforeChange: () => {
      if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur();
      }
    },
  };

  return (
    <section
      id="heroSection"
      className="relative h-screen w-full overflow-hidden bg-primary"
    >
      <IntroOverlay/>
      <Slider {...settings}>
        {slides.map((src, index) => (
          <div key={index}>
            <div className="relative h-screen w-full overflow-hidden">
              <img
                // loading="lazy"
                src={src}
                alt={`slide-${index}`}
                className="absolute inset-0 h-full w-full object-cover object-center z-0 transition-opacity duration-1000"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-hover/20 to-primary z-10" />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 ">
                  <h1 className="text-white text-3xl md:text-5xl my-8 font-extrabold tracking-wide overflow-hidden min-h-[3rem] md:min-h-[4rem]">
                    <TypeAnimation
                      sequence={[
                        1000,
                        "Welcome to GSP",
                        1000,
                        "Gulf Seas For Pipes",
                      ]}
                      speed={75}
                      cursor={false}
                      repeat={Infinity}
                      preRenderFirstString
                    />
                  </h1>

                  <h2 className="text-white text-xl md:text-3xl font-bold overflow-hidden swap" >
                    Expertise in construction and pipeline solutions
                  </h2>
              </div>

            </div>
          </div>
        ))}
      </Slider>
      <ScrollDown to="leadershipSection" />
    </section>
  );
}
