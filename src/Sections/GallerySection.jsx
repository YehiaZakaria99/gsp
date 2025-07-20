import { useContext } from "react";
import { galleryContext } from "./../Context/GalleryContext";
import Slider from "react-slick";
import { Link } from "react-router";
import { cn } from "../lib/utils";
import { ArrowRight } from "lucide-react";

export default function GallerySection() {
  const { galleryImages } = useContext(galleryContext);

  const settings = {
    dots: false,
    arrows: false,
    swipe: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    pauseOnHover: true,
    fade: true,
    cssEase: "ease-in-out",
    beforeChange: () => {
      if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur();
      }
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide mb-2">
            Our Gallery
          </h3>
          <div className="w-24 h-[3px] bg-primary mx-auto" />
        </div>

        {/* Slider Section */}
        <div className="px-6 md:px-16 py-6 mx-auto">
          <div className="container">
            <Slider
              {...settings}
              className="rounded-2xl border-t-4 border-primary shadow-sm shadow-primary relative w-full max-w-[750px] h-[420px] mx-auto"
            >
              {galleryImages.map((img, key) => (
                <div key={key} className="h-full">
                  <div className="h-full px-4 py-8 bg-white/90 rounded-xl transition-all duration-1000 ease-in-out flex flex-col md:flex-row items-center gap-6">
                    <img
                      loading="lazy"
                      src={img}
                      alt="GSP Slide"
                      className="w-full h-[350px] object-cover rounded-xl shadow-md"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12">
          <Link
            to="/gallery"
            className={cn(
              "inline-flex items-center gap-2 text-md px-6 py-2 rounded-md border border-primary text-primary",
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
