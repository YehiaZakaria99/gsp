import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../lib/utils";

gsap.registerPlugin(ScrollTrigger);

const IntroCard = ({ p, img, i }) => {
  const container = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx;
    if (container.current && imageRef.current) {
      ctx = gsap.context(() => {
        gsap.fromTo(
          imageRef.current,
          { scale: 2 },
          {
            scale: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: container.current,
              start: "top 80%",
              end: "bottom 80%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
        ScrollTrigger.refresh();
      }, container);
    }

    return () => {
      ctx && ctx.revert();
    };
  }, []);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4"
    >
      <div
        className={cn(
          "flex flex-col relative md:h-[500px] w-full max-w-[1000px] rounded-[25px] p-[50px]"
        )}
        style={{ top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div className="flex flex-col-reverse md:flex-row h-full mt-[50px] gap-[50px] bg-white text-primary p-8 rounded-xl shadow-md shadow-primary overflow-auto">
          <div className="w-full md:w-[40%] relative md:top-[10%]">
            <p className="text-[16px] leading-relaxed first-letter:text-[28px] first-letter:font-title">
              {p}
            </p>
          </div>

          <div className="relative w-full md:w-[60%] h-full rounded-md md:rounded-[25px] overflow-hidden">
            <div className="w-full h-full">
              <img
                ref={imageRef}
                src={img}
                alt={p}
                loading="lazy"
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out will-change-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
