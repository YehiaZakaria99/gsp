import constructionImg from "/GalleryPage/19.webp";
import pipeLineImg from "/GalleryPage/36.webp";
import mechanicalImg from "/GalleryPage/31.webp";
import electricalImg from "/GalleryPage/34.webp";
import technicalImg from "/GalleryPage/32.webp";

import {
  ArrowRight,
  Building2,
  Cable,
  Settings,
  Wrench,
} from "lucide-react";
import { Link } from "react-router";
import { cn } from "../lib/utils";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function OurSolutionsSection() {
  const titleRef = useRef(null);

  const solutions = [
    {
      icon: <Building2 size={36} />,
      title: "Construction Solutions",
      description:
        "Comprehensive civil and construction services tailored to industrial needs.",
      bgImg: constructionImg,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36px"
          viewBox="0 0 48 48"
          fill="currentColor"
        >
          <path d="M40,30a2,2,0,0,0-2,2v1H22a2,2,0,0,1,0-4h4A12,12,0,0,0,26,5H10V4A2,2,0,0,0,6,4V16a2,2,0,0,0,4,0V15H26a2,2,0,0,1,0,4H22a12,12,0,0,0,0,24H38v1a2,2,0,0,0,4,0V32A2,2,0,0,0,40,30Z" />
        </svg>
      ),
      title: "Pipelines Solutions",
      description:
        "Expertise in pipeline installation, maintenance, and inspection.",
      bgImg: pipeLineImg,
    },
    {
      icon: <Settings size={36} />,
      title: "Mechanical Solutions",
      description:
        "Innovative mechanical systems and equipment for industrial operations.",
      bgImg: mechanicalImg,
    },
    {
      icon: <Cable size={36} />,
      title: "Electrical Solutions",
      description:
        "High-quality electrical systems, installations, and automation.",
      bgImg: electricalImg,
    },
    {
      icon: <Wrench size={36} />,
      title: "Technical Solutions",
      description:
        "Specialized technical support and custom-engineered solutions.",
      bgImg: technicalImg,
    },
  ];
  const scrollRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    solutions.forEach((solution) => {
      const img = new Image();
      img.src = solution.bgImg;
    });
  }, []);

  // Animation

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 85%",
          // end: "center 49%",
          toggleActions: "play none none reverse",
        },
      })
      .fromTo(
        boxes,
        {
          // scale: 0.1,
          rotationY: 180,
          opacity: 0,
          transformPerspective: 1000,
          // x: "10px",
          duration: 0.6,
          ease: "power2.inOut",
          stagger: 0.15,
          willChange: "opacity, transform",
        },
        {
          // scale: 1,
          rotationY: 0,
          opacity: 1,
          // x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.inOut",
          clearProps: "willChange",
        }
      );

    // btn animation
    gsap.fromTo(
      btnRef.current,
      {
        x: "-400px",
        opacity: 0,
      },
      {
        x: 0,
        duration: 0.6,
        ease: "power2.inOut",
        opacity: 1,
        scrollTrigger: {
          trigger: btnRef.current,
          start: "top 97%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.from([titleRef.current /*subtitleRef.current */], {
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

  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h3
            ref={titleRef}
            className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide mb-2"
          >
            Our Solutions
          </h3>
          <div className="w-24 h-[3px] bg-primary mx-auto" />
        </div>

        <div
          ref={scrollRef}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {solutions.map((solution, idx) => (
            <div
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              key={idx}
              className={cn(
                "bg-white rounded-2xl overflow-hidden shadow-md h-full border-primary text-primary",
                "transition-all duration-300 transform group hover:bg-primary hover:text-white",
                "relative"
              )}
            >
              <div className="img-box h-full relative">
                <img
                  loading="lazy"
                  className={cn(
                    "w-full h-full object-cover ",
                    "group-hover:scale-125 transition-all duration-300"
                  )}
                  src={solution.bgImg}
                  alt={solution.title}
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
                  "absolute z-20 bottom-5 left-1/2",
                  "transform -translate-x-1/2",
                  "will-change-transform"
                )}
              >
                <div className="transform group-hover:-translate-y-5 transition-all duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-bold transform group-hover:-translate-y-5 transition-all duration-300">
                  {solution.title}
                </h3>
                {/* <p className="text-sm ">{solution.description}</p> */}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12  overflow-hidden">
          <Link
            ref={btnRef}
            to="/ourSolutions"
            className={cn(
              "inline-flex items-center transform  gap-2 text-md px-6 py-2 rounded-md border border-primary text-primary",
              "hover:bg-primary hover:text-white transition-all duration-300 font-semibold group"
            )}
          >
            More Details
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
