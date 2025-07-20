import React from "react";
import { Tree } from "react-organizational-chart";
import { cn } from "../../lib/utils";

export default function QualityControl({
  headerTitle,
  isMobile,
  renderNode,
  chartData,
}) {
  return (
    <>
      <section className={headerTitle}>
        <h2 className="text-primary font-bold text-3xl text-center my-3 uppercase">
          Quality Control{" "}
        </h2>
        <div className="w-full overflow-x-auto md:flex md:justify-center py-6">
          <div
            className="min-w-[350px] w-fit flex justify-center"
            data-aos="fade-up"
          >
            <Tree
              direction={isMobile ? "vertical" : "horizontal"}
              lineWidth={"2px"}
              lineColor="#292C62"
              lineBorderRadius={"10px"}
              label={
                <div
                  className={cn(
                    "text-white font-bold bg-primary border-white text-center",
                    "rounded-lg px-3 py-1 md:px-6 md:py-2",
                    "text-sm md:text-base shadow-md transition-transform duration-300",
                    "hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-white/70"
                  )}
                >
                  {chartData[headerTitle].name}
                  <div className="text-xs font-medium text-white/80">
                    {chartData[headerTitle].title}
                  </div>
                </div>
              }
            >
              {chartData[headerTitle].children.map((child, key) =>
                renderNode(child, key)
              )}
            </Tree>
          </div>
        </div>
      </section>
    </>
  );
}
