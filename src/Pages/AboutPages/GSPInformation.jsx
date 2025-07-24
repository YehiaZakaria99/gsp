import img1 from "/AboutPages/gsp-information/scan-me.webp";
import bgImg from "/AboutPages/gsp-information/bgImg.webp";

import { cn } from "./../../lib/utils";

import informationData from "../../Data/informationData.json";
import { useEffect } from "react";

const { infoData } = informationData;

export default function GSPInformation() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <section className="bg-primary/20 py-20">
      {/* Header */}
      <div
        className="relative px-6 md:px-16 py-10 mb-20 flex flex-col-reverse md:flex-row items-center gap-10 bg-cover h-[300px] md:h-[450px] lg:h-[500px] md:bg-fixed bg-bottom shadow-xl overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-hover/30 to-primary/80 z-10" />
        <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bg tracking-tight leading-tight drop-shadow-lg">
            Information
          </h1>
        </div>
      </div>

      <div className="container px-4 md:px-10 lg:px-20">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
          {/* Text Section */}
          <div
            className="w-full lg:w-1/2 space-y-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <ul className="space-y-4">
              {infoData.map((infoObj, key) => (
                <li
                  key={key}
                  className={cn(
                    "bg-white text-primary border-primary border-t-4 p-4 rounded-lg shadow-lg backdrop-blur-sm",
                    "transition-all duration-300 ",
                    "hover:bg-primary hover:text-white "
                  )}
                  data-aos="fade-up"
                  data-aos-delay={400 + key * 100}
                >
                  {Object.entries(infoObj).map(([label, value], i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span
                        className={cn(" text-sm md:text-base font-semibold ")}
                      >
                        {label}
                      </span>
                      <span className={cn("text-base md:text-lg font-bold ")}>
                        {value}
                      </span>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div
            className="w-full lg:w-1/2 max-w-md mx-auto"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl ">
              <img
                loading="lazy"
                src={img1}
                alt="Scan QR"
                className={cn(
                  "w-full h-auto object-cover",
                  "transition duration-300 group-hover:scale-125"
                )}
              />
              <div
                className={cn(
                  "absolute inset-0 z-10 bg-hover/20",
                  "transition duration-300 group-hover:bg-transparent"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
