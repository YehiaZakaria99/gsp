import React, { useRef } from "react";
import { cn } from "../../lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Loading() {
  const scrollRef = useRef();

  // Implement Gsap.to() method
  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    boxes.forEach((box)=>{
      gsap.to(box, {
        x: 150,
        rotation: 360,
        borderRadius: '100%',
        scale: 1.5,
        scrollTrigger: {
          trigger : box,
          start: 'bottom bottom',
          end: 'top 20%',
          scrub: true
        },
        ease: 'power2.Out'
      })
    })
  }, []);

  return (
    <>
      <section className="h-screen bg-slate-700 text-white px-20 py-20">
        <div
          ref={scrollRef}
          className={cn("container bg-red-900 h-full ", "flex items-center")}
        >
          <div
            className="box w-52 h-52 bg-black rounded-lg"
            id="blackBox"
          ></div>
          <div
            className="box w-52 h-52 bg-white rounded-lg"
            id="whiteBox"
          ></div>
        </div>
      </section>
    </>
  );
}

/* 
useGSAP(() => {
    gsap.to("#box", {
      x: 1000,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
    });
  }, []);
*/
