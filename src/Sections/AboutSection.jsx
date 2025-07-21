import introductionBg from "/AboutPages/gsp-introduction/introduction.webp";
import informationBg from "/AboutPages/gsp-information/bgImg.webp";
import chartBg from "/AboutPages/organizational-chart/bgImg.webp";
import manPowerBg from "/GalleryPage/37.webp";
import ownedMachinesBg from "/AboutPages/owned-machines/img.webp";
import financialStatusBg from "/AboutPages/financial-status/financial-status.webp";

import {
  BarChart2,
  Hammer,
  Info,
  Pyramid,
  UserCircle,
  Users2,
} from "lucide-react";
import { NavLink } from "react-router";
import { cn } from "../lib/utils";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollRef = useRef(null);

  const sections = [
    {
      title: "GSP Introduction",
      to: "/about/gsp-introduction",
      icon: <Info size={36} />,
      bgImg: introductionBg,
    },
    {
      title: "GSP Information",
      to: "/about/gsp-information",
      icon: <UserCircle size={36} />,
      bgImg: informationBg,
    },
    {
      title: "Organizational Chart",
      to: "/about/organizational-chart",
      icon: <Pyramid size={36} />,
      bgImg: chartBg,
    },
    {
      title: "Our Man Power",
      to: "/about/our-man-power",
      icon: <Users2 size={36} />,
      bgImg: manPowerBg,
    },
    {
      title: "Owned Machines",
      to: "/about/owned-machines",
      icon: <Hammer size={36} />,
      bgImg: ownedMachinesBg,
    },
    {
      title: "Financial Status",
      to: "/about/financial-status",
      icon: <BarChart2 size={36} />,
      bgImg: financialStatusBg,
    },
  ];

  useEffect(() => {
    sections.forEach((section) => {
      const img = new Image();
      img.src = section.bgImg;
    });
  }, []);

  useGSAP(() => {
    gsap.from([titleRef.current, subtitleRef.current], {
      y: "100px",
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
      },
    });
  }, []);

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 85%",
          end: "center 49%",
          toggleActions: "play none none reverse",
        },
      })
      .fromTo(
        boxes,
        {
          scale: 0.1,
          rotation: 45,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
          y: "300px",
          willChange: "opacity, transform",
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
          clearProps: "willChange",
        }
      );
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <h3
            ref={titleRef}
            className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide mb-2"
          >
            About Us
          </h3>
          <div className="w-24 h-[3px] bg-primary mx-auto" />
          <p
            ref={subtitleRef}
            className="text-center max-w-96 mx-auto font-semibold my-6 md:text-lg text-primary/90"
          >
            Gulf Seas For Pipes. (GSP) since 1991 commits to provide
            comprehensive top-quality services to its community.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:px-32 overflow-y-hidden"
        >
          {sections.map((section, index) => (
            <NavLink
              key={index}
              to={section.to}
              className={cn(
                "rounded-xl",
                "shadow-md shadow-primary/70",
                "relative overflow-hidden",
                "group",
                "will-change-transform content-visibility: auto"
              )}
            >
              <div className="img-box h-full relative">
                <img
                  loading="lazy"
                  className={cn(
                    "w-full h-full object-cover",
                    "group-hover:scale-125 transition-all duration-300"
                  )}
                  src={section.bgImg}
                  alt={section.to}
                />
                <div
                  className={cn(
                    "overlay absolute inset-0 z-10 bg-primary/70",
                    "transition duration-300"
                  )}
                ></div>
              </div>

              <div
                className={cn(
                  "content flex flex-col items-center gap-3 text-white",
                  "absolute z-20 bottom-10 left-1/2",
                  "transform -translate-x-1/2",
                  "will-change-transform"
                )}
              >
                <div className="transform group-hover:-translate-y-5 transition-all duration-300">
                  {section.icon}
                </div>
                <h3 className="text-lg font-bold transform group-hover:-translate-y-5 transition-all duration-300">
                  {section.title}
                </h3>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
