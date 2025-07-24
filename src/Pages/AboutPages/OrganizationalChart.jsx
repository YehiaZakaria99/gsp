import { useEffect, useState } from "react";
import { TreeNode } from "react-organizational-chart";
import chartData from "../../Data/chartData.json";
import { cn } from "../../lib/utils";

import mainImg from "/AboutPages/organizational-chart/bgImg.webp";
import HeadManagement from "../../Components/OrganizationalComponents/HeadManagement";
import HsE from "./../../Components/OrganizationalComponents/HsE";
import QualityControl from "../../Components/OrganizationalComponents/QualityControl";

export default function OrganizationalChart() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const [isMobile, setIsMobile] = useState(false);

  const [headManagement, HSE, qualityControl] = Object.entries(chartData).map(
    ([key]) => key
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderNode = (node, key) => (
    <TreeNode
      key={key}
      label={
        <div
          className={cn(
            "text-white bg-primary  border-white text-center",
            "rounded-lg px-2 py-1 md:px-4 md:py-2",
            "text-[11px] md:text-sm shadow-sm transition-transform duration-300",
            "hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-white/70"
          )}
        >
          {node.name}
          <div className="text-[9px] md:text-xs text-white/80">
            {node.title}
          </div>
        </div>
      }
    >
      {node.children &&
        node.children.map((child, idx) => renderNode(child, idx))}
    </TreeNode>
  );

  return (
    <section className="bg-primary/20 py-20">
      {/* Header */}
      <div
        className="relative px-6 md:px-16 py-10 mb-20 flex flex-col-reverse md:flex-row items-center gap-10 bg-cover h-[300px] md:h-[450px] lg:h-[500px] md:bg-fixed bg-center shadow-xl overflow-hidden"
        style={{ backgroundImage: `url(${mainImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-hover/30 to-primary/80 z-10" />
        <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bg tracking-tight leading-tight drop-shadow-lg">
            Organizational Chart
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-md font-semibold">
            Explore our structure and meet the amazing team leading our company.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-16 py-10 max-w-6xl mx-auto text-center md:text-left my-5">
        <p className="text-primary font-medium text-lg leading-relaxed">
          <span className="block my-2 overflow-auto">
            <span className="font-bold block text-3xl my-2 ">
              At Gulf Seas Pipes Co.,
            </span>
            we are committed to providing our clients with the highest level of
            service and expertise. Our team of qualified professionals is
            dedicated to understanding your unique needs and developing
            customized solutions that meet your specific requirements.
          </span>
        </p>
      </div>

      {/* Hint for mobile users */}
      {isMobile && (
        <p className="text-center text-sm text-gray-600 italic mb-4">
          You can scroll horizontally to explore the full chart.
        </p>
      )}

      {/* Chart */}
      <section className="py-4 ">
        <HeadManagement
          headerTitle={headManagement}
          isMobile={isMobile}
          renderNode={renderNode}
          chartData={chartData}
        />
        <HsE
          headerTitle={HSE}
          isMobile={isMobile}
          renderNode={renderNode}
          chartData={chartData}
        />
        <QualityControl
          headerTitle={qualityControl}
          isMobile={isMobile}
          renderNode={renderNode}
          chartData={chartData}
        />
      </section>
    </section>
  );
}
