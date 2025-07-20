import {
  ArrowRight,
  Building2,
  Cable,
  Pipette,
  Settings,
  Wrench,
} from "lucide-react";
import { Link } from "react-router";
import { cn } from "../lib/utils";

const solutions = [
  {
    icon: <Building2 size={36} />,
    title: "Construction Solutions",
    description:
      "Comprehensive civil and construction services tailored to industrial needs.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36px"
        viewBox="0 0 48 48"
        fill="currentColor"
      >
        <path d="M40,30a2,2,0,0,0-2,2v1H22a2,2,0,0,1,0-4h4A12,12,0,0,0,26,5H10V4A2,2,0,0,0,6,4V16a2,2,0,0,0,4,0V15H26a2,2,0,0,1,0,4H22a12,12,0,0,0,0,24H38v1a2,2,0,0,0,4,0V32A2,2,0,0,0,40,30Z" />
      </svg>
    ),
    title: "Pipelines Solutions",
    description:
      "Expertise in pipeline installation, maintenance, and inspection.",
  },
  {
    icon: <Settings size={36} />,
    title: "Mechanical Solutions",
    description:
      "Innovative mechanical systems and equipment for industrial operations.",
  },
  {
    icon: <Cable size={36} />,
    title: "Electrical Solutions",
    description:
      "High-quality electrical systems, installations, and automation.",
  },
  {
    icon: <Wrench size={36} />,
    title: "Technical Solutions",
    description:
      "Specialized technical support and custom-engineered solutions.",
  },
];

export default function OurSolutionsSection() {
  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide mb-2">
            Our Solutions
          </h3>
          <div className="w-24 h-[3px] bg-primary mx-auto" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className={cn(
                "bg-white rounded-2xl shadow-md p-6 border-t-4 h-full border-primary text-primary",
                "transition-all duration-300 transform hover:scale-105 hover:bg-primary hover:text-white"
              )}
            >
              <div className="mb-4 flex justify-center items-center">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-sm ">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <Link
            to="/ourSolutions"
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
