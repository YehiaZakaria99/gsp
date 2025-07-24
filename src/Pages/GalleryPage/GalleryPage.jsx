import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import bgImg from "/GalleryPage/bgImg.webp";

import { useContext, useEffect } from "react";
import { galleryContext } from "../../Context/GalleryContext";
import { cn } from "../../lib/utils";

export default function GalleryPage() {
  const { galleryImages } = useContext(galleryContext);
  return (
    <section className="bg-primary/20 py-20">
      {/* Header */}
      <div
        className="relative px-6 md:px-16 py-10 mb-20 flex flex-col-reverse md:flex-row items-center gap-10 bg-cover h-[300px] md:h-[450px] lg:h-[500px] md:bg-fixed bg-center shadow-xl overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-hover/50 to-primary/90 z-10" />
        <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bg tracking-tight leading-tight drop-shadow-lg">
            Media Gallery
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-5">
        <PhotoProvider>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-hidden">
            {galleryImages.map((src, index) => (
              <PhotoView key={index} src={src}>
                <div className="relative group rounded-lg overflow-hidden shadow-md aspect-[4/3] shadow-primary border border-primary cursor-pointer">
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    loading="lazy"
                    className=" cursor-pointer w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 z-10 bg-hover/25",
                      "transition duration-500 group-hover:bg-transparent"
                    )}
                  ></div>
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
}
