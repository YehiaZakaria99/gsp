// images
import bgImg from "/AboutPages/our-equipments/bgImg.webp";

import img1 from "/AboutPages/our-equipments/img.jpeg";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function OurEquipments() {
  const data = [
    { title: "Lorem ipsum dolor sit.", img: img1 },
    { title: "Lorem ipsum dolor sit.", img: img1 },
    { title: "Lorem ipsum dolor sit.", img: img1 },
    { title: "Lorem ipsum dolor sit.", img: img1 },
    { title: "Lorem ipsum dolor sit.", img: img1 },
    { title: "Lorem ipsum dolor sit.", img: img1 },
    { title: "Lorem ipsum dolor sit.", img: img1 },
    { title: "Lorem ipsum dolor sit.", img: img1 },
    { title: "Lorem ipsum dolor sit.", img: img1 },
    { title: "Lorem ipsum dolor sit.", img: img1 },
    { title: "Lorem ipsum dolor sit.", img: img1 },
  ];
  useEffect(() => {
    data.forEach((item) => {
      const img = new Image();
      img.src = item.img;
    });
  }, []);

  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const q = gsap.utils.selector(wrapperRef);

    const cards = q(".card-item");
    const images = q(".card-image");

    cards.forEach((card, index) => {
      const image = images[index];

      // Scroll Cart
      gsap.to(card, {
        y: -20 * (cards.length - index),
        ease: "power2.inOut",
        duration: .6,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom top",
          scrub: true,
        },
      });

      // Zoom Image
      gsap.fromTo(
        image,
        { scale: 0.5, y: 20, rotationY: 180, transformPerspective: 1000 },
        {
          scale: 1,
          rotationY: 0,
          y: 0,
          duration: .6,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: image,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });
    // Cleanning Up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="our-equipments">
        <section
          className="mb-20 relative px-6 md:px-16 py-10  flex flex-col-reverse md:flex-row items-center gap-10 bg-cover h-[300px] md:h-[450px] lg:h-[550px] md:bg-fixed bg-center  shadow-xl overflow-hidden"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-hover/30 to-primary/80 z-10" />
          <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bg tracking-tight leading-tight drop-shadow-lg">
              Our Equipments
            </h1>
            <p className="text-white text-lg md:text-2xl max-w-md font-bold">
              We use top-tier equipment to ensure the highest standards of
              quality and performance in all our projects.
            </p>
          </div>
        </section>
        <section className="  py-20">
          <div
            ref={wrapperRef}
            className="cards-wrapper max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 gap-12 relative z-10 "
          >
            {data.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "card-item  rounded-3xl p-6 sm:p-8  relative z-[1] transition-transform duration-300 will-change-transform "
                )}
              >
                <div className="card-image-container max-h-80 overflow-hidden rounded-2xl mb-4">
                  <img
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                    src={item.img}
                    alt={item.title}
                    className="card-image w-full h-full object-cover transition-all duration-300 rounded-2xl"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-center text-primary mt-5">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
