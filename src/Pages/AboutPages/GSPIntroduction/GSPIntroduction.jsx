import Slider from "react-slick";
// images
import mainImg from "/AboutPages/gsp-introduction/introduction.webp";
import pipeImg from "/GalleryPage/36.webp";
import teamImg from "/GalleryPage/37.webp";
import img3 from "/GalleryPage/25.webp";
import img4 from "/GalleryPage/17.webp";
import { useEffect } from "react";
import { cn } from "../../../lib/utils";
import IntroCard from "../../../Components/IntroCard/IntroCard";

export default function GSPIntroduction() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const introData = [
    {
      img: pipeImg,
      h2: "",
      p: `Gulf Seas For Pipes. (GSP) since 1991 commits to provide comprehensive top-quality services to its community. We Excelled in executing various construction projects of all types of complexities as well as various types of services.`,
    },
    {
      img: teamImg,
      h2: "",
      p: `GSP is backed by professional team of qualified and well experienced staff and fleet of company owned tools and equipment,we are fully competent to efficiently undertake EPC projects from initial planning to turnover and commissioning.`,
    },
    {
      img: img3,
      h2: "",
      p: `GSP is capable of earthworks, civil works, electrical works, mechanical works, road works, including construction of drilling well pads, reservoirs, waste disposal ponds with provision of HDPE plastic lining works. At GSP, we utilize many modern techniques of construction, scheduling and cost controlling with effective quality & safety to ensuretargets are met within the client budget.`,
    },
    {
      img: img4,
      h2: "",
      p: `Our key personnel are PMP certified and quality of our work man ship is kept at a high standard by appointing the right person for the project and constant collaboration with the client's representative.Currently our employee count is (272) and we have sufficient available block visas for immediate employment from any country of origin.

`,
    },
  ];

  return (
    <section className="introduction bg-white py-20 ">
      {/* Title + Image */}
      <section
        className={cn(
          "relative px-6 md:px-16 py-10 mb-20 flex flex-col-reverse md:flex-row items-center gap-10 bg-cover h-[300px] md:h-[450px] lg:h-[500px] md:bg-fixed bg-bottom  shadow-xl overflow-hidden",
          "header"
        )}
        style={{ backgroundImage: `url(${mainImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-hover/30 to-primary/80 z-10" />
        <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bg tracking-tight leading-tight drop-shadow-lg">
            Introduction
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-md font-bold">
            Know more about our background, capabilities, and commitment to
            excellence.
          </p>
        </div>
      </section>
      {/* Animated Cards */}
      {introData.map(({ p, img }, key) => (
        <IntroCard key={`k${key}`} p={p} img={img} i={key} />
      ))}
    </section>
  );
}
