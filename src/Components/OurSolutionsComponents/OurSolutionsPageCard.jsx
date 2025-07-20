import React from "react";
import { cn } from "./../../lib/utils";

export default function OurSolutionsPageCard({
  index,
  solution: { img, title, description },
}) {
  return (
    <>
      <div
        className={cn(
          "w-full flex flex-col items-center justify-center gap-0 md:gap-10 px-4 max-w-7xl mx-auto",
          index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
        )}
      >
        {/* Image */}
        <div className="w-full md:w-1/2  ">
          <div className="my-8">
            <div className="relative group cursor-pointer flex h-[200px] sm:h-[300px] md:h-[350px] shadow-lg rounded-3xl overflow-hidden shadow-primary bg-primary/20">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
              />
              <div
                className={cn(
                  "absolute inset-0 z-10 bg-hover/25",
                  "transition duration-500 group-hover:bg-transparent"
                )}
              ></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
          <h3 className="text-3xl md:text-3xl font-bold text-primary">
            {title}
          </h3>
          <p className="text-primary text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </>
  );
}
