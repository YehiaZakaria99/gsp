import { useContext, useEffect, useRef, useState } from "react";
import { galleryContext } from "../Context/GalleryContext";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const titleRef = useRef(null);

  const { galleryImages } = useContext(galleryContext);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    arrangeCards(index);
  }, [index]);

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

  const arrangeCards = (currentIndex) => {
    const total = galleryImages.length;

    cardsRef.current.forEach((card, i) => {
      const pos = (i - currentIndex + total) % total;

      let x = 0;
      let scale = 1;
      let rotateZ = 0;
      let z = 0;
      let opacity = 0;
      let blur = "0px";
      let pointerEvents = "none";

      if (pos === 0) {
        // Center
        x = 0;
        scale = 1;
        rotateZ = 0;
        z = 3;
        opacity = 1;
        blur = "0px";
        pointerEvents = "auto";
      } else if (pos === 1) {
        // Right
        x = 120;
        scale = 0.9;
        rotateZ = -10;
        z = 2;
        opacity = 1;
        blur = "2px";
        pointerEvents = "auto";
      } else if (pos === total - 1) {
        // Left
        x = -120;
        scale = 0.9;
        rotateZ = 10;
        z = 1;
        opacity = 1;
        blur = "2px";
        pointerEvents = "auto";
      }

      gsap.to(card, {
        x,
        scale,
        rotateZ,
        zIndex: z,
        opacity,
        duration: 0.6,
        ease: "power2.inOut",
        onUpdate: () => {
          card.style.filter = `blur(${blur})`;
          card.style.pointerEvents = pointerEvents;
        },
      });
    });
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const handleClick = (clickedIndex) => {
    setIndex(clickedIndex);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-10">
          <h3
            ref={titleRef}
            className="text-3xl md:text-4xl font-extrabold text-primary mb-2"
          >
            Our Gallery
          </h3>
          <div className="w-24 h-[3px] bg-primary mx-auto" />
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative h-[420px] w-[320px] mx-auto"
        >
          {galleryImages.map((img, i) => (
            <img
              loading="lazy"
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              src={img}
              alt={`Slide ${i}`}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-2xl border border-white transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => handleClick(i)}
              style={{
                transformStyle: "preserve-3d",
              }}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="mt-10 flex justify-center gap-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-all shadow-md"
          >
            <ArrowLeft className="mx-auto" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-all shadow-md"
          >
            <ArrowRight className="mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}
