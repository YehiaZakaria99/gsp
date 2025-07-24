import { cn } from "../../lib/utils";
import bgImg from "/AboutPages/LeadershipPage/img.webp";
import chairmanImg from "/AboutPages/LeadershipPage/owner.webp";
import { useEffect } from "react";

export default function LeadershipPage() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <section className="leadership-page py-20 bg-primary/20 ">
        {/* Header Section */}
        <section className=" ">
          <div
            className={cn(
              "relative px-6 md:px-16 mb-20 shadow-2xl overflow-hidden py-10",
              "flex flex-col-reverse md:flex-row items-center gap-10",
              "h-[300px] md:h-[450px] lg:h-[500px]",
              "bg-cover bg-center md:bg-fixed"
            )}
            style={{ backgroundImage: `url(${bgImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-hover/30 to-primary/80 z-10 animate-fade-in" />
            <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bg tracking-tight leading-tight drop-shadow-xl">
                Leadership
              </h1>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="px-6 md:px-16 py-10 max-w-6xl mx-auto text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            About Chairman
          </h2>
          <p className="text-primary font-medium text-lg leading-relaxed">
            <span className="block my-2">
              <span className="font-bold">Mr. Mohammed Al Assmi</span> – The CEO
              of this company. GSP is moving forward under his inspiring
              leadership and vision.
            </span>
            <span className="block my-2">
              With a deep sense of professionalism and strategic insight, he
              consistently drives the company towards success and innovation.
            </span>
          </p>
        </section>

        {/* Message Section */}
        <section className="px-6 md:px-16 py-16 ">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center shadow-lg rounded-2xl p-6 md:p-10 bg-white/80 backdrop-blur-sm">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  loading="lazy"
                  src={chairmanImg}
                  alt="Company Owner"
                  className={cn(
                    "shadow-xl w-[300px] h-[400px] object-cover transform ",
                    "transition duration-500 ease-in-out group-hover:scale-110 "
                  )}
                />
                <div
                  className={cn(
                    "overlay absolute inset-0 bg-hover/30 rounded-2xl z-0",
                    "group-hover:bg-transparent transition duration-500 ease-in-out"
                  )}
                ></div>
              </div>
            </div>

            {/* Message */}
            <div className="overflow-auto px-2 py-2 animate-fade-up">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Chairman's Message
              </h3>
              <div className="text-primary/80 font-medium text-lg space-y-4 leading-relaxed">
                <p className="italic border-l-4 border-primary pl-4 bg-primary/5 rounded-md">
                  "The key to the Group’s sustainable success is encouraging
                  leadership at all levels, embracing diversity as a source of
                  strength, remaining unified as we work toward achieving our
                  vision, and supporting entrepreneurship as we innovate and add
                  value to customers, community, and nation."
                </p>
                <p>
                  GSP has evolved into a multi-speciality company with a global
                  presence. Our journey of over 22 years has been rooted in core
                  values and guided by a strong ethical compass.
                </p>
                <p>
                  These values—leadership, diversity, unity, integrity, and
                  innovation—continue to shape our growth and define our future.
                </p>
                <div className="mt-6">
                  <p className="font-bold text-primary text-md italic">
                    Mohammed Shamrookh Al Assmi
                  </p>
                  <p className="text-primary/70 text-sm">Group Chairman</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
