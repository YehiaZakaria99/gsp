import { cn } from "../lib/utils";
import img02 from "/GalleryPage/02.webp";
import VideoPlayer from "./../Components/LeaderShipComponent/VideoPlayer";
import { NavLink } from "react-router";
import chairmanImg from "/AboutPages/LeadershipPage/owner.webp";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function LeadershipSection() {
  const imageRef = useRef(null);
  const overlayImageRef = useRef(null);
  const textRef = useRef(null);

  const headingRef = useRef(null);
  const quoteRef = useRef(null);
  const buttonRef = useRef(null);
  const overlayVideoRef = useRef(null);
  const videoRef = useRef(null);
  const textSectionRef = useRef(null);

  // New: Refs for list items and leader cards
  const listRefs = useRef([]);
  const leaderRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🎬 Timeline 1: Visuals
      const tlVisual = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tlVisual.fromTo(
        overlayImageRef.current,
        { x: "0%" },
        { x: "100%", ease: "power2.out", duration: 1.2 }
      );

      tlVisual.fromTo(
        overlayVideoRef.current,
        { x: "0%" },
        { x: "-100%", ease: "power2.out", duration: 1.2 },
        "-=1"
      );

      tlVisual.fromTo(
        textRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );

      // 🎯 Timeline 2: Text content
      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      // 🪄 Heading from left
      tlText.from(headingRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      // 🪄 Quote from right
      tlText.from(
        quoteRef.current,
        {
          x: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // 🪄 List items from bottom
      tlText.from(
        listRefs.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.4"
      );

      // 🪄 Button from bottom
      tlText.from(buttonRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      // 🪄 Leaders from opposite sides
      tlText.from(leaderRefs.current[0], {
        x: -30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      tlText.from(
        leaderRefs.current[1],
        {
          x: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="leadershipSection"
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="group relative rounded-xl overflow-hidden shadow-lg">
            <img
              ref={imageRef}
              loading="lazy"
              src={img02}
              alt="team"
              className="w-full object-center object-cover h-[250px]"
            />
            <div
              ref={overlayImageRef}
              className="absolute inset-0 bg-white z-10"
            />
          </div>

          <p
            ref={textRef}
            className="text-4xl font-bold text-primary flex items-baseline gap-2"
          >
            22+
            <span className="text-gray-800 text-xl">Years Experience</span>
          </p>
        </div>

        {/* Right Side */}
        <div ref={textSectionRef} className="w-full lg:w-1/2">
          <div className="space-y-4">
            {/* Heading */}
            <div className="mb-12">
              <h3
                ref={headingRef}
                className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide mb-2"
              >
                Leadership to Inspire & Encourage
              </h3>
            </div>

            {/* Quote */}
            <p ref={quoteRef} className="italic text-primary/80">
              “The key to the Group’s sustainable success is encouraging
              leadership at all levels...
            </p>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Highlights + Button */}
              <div className="w-full lg:w-1/2 space-y-4">
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Multi-Speciality Company",
                    "22+ Years of Progress",
                    "Worldwide Presence",
                    "Continuously Innovate",
                  ].map((text, i) => (
                    <li
                      key={i}
                      ref={(el) => (listRefs.current[i] = el)}
                      className="flex items-center gap-2"
                    >
                      <span className="text-primary">➤</span> {text}
                    </li>
                  ))}
                </ul>

                <div ref={buttonRef}>
                  <NavLink
                    to="about/leadership"
                    className={cn(
                      "inline-block font-semibold mt-4 px-6 py-2 rounded-lg",
                      "special-style border"
                    )}
                  >
                    Read Chairman’s Message
                  </NavLink>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      name: "Mohammed Shamrookh Al Assmi",
                      title: "Chairman of Company",
                    },
                    {
                      name: "Mutaeb AlHajri",
                      title: "Executive Director",
                    },
                  ].map((leader, i) => (
                    <div
                      key={i}
                      ref={(el) => (leaderRefs.current[i] = el)}
                      className="flex items-center gap-4"
                    >
                      <img
                        loading="lazy"
                        src={chairmanImg}
                        alt={leader.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm">{leader.name}</p>
                        <p className="text-xs text-gray-500">{leader.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video */}
              <div className="w-full lg:w-1/2 py-5 relative overflow-hidden">
                <VideoPlayer
                  videoRef={videoRef}
                  overlayVideoRef={overlayVideoRef}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
