import mainImg from "/AboutPages/financial-status/financial-status.webp";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import financialStatusData from "../../Data/financialStatusData.json";
import { useEffect } from "react";

const { financialData } = financialStatusData;

export default function FinancialStatus() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const label = Object.entries(financialData[0]).filter(
    ([key, value]) => typeof value == "number"
  );
  const years = label.map(([key]) => key);

  const formattedData = years.map((year) => {
    const row = { Year: year };
    financialData.forEach((item) => {
      row[item["US $ Millions"]] = item[year];
    });
    return row;
  });

  const dataKeys = financialData.map((item) => item["US $ Millions"]);

  return (
    <>
      <section className="bg-primary/20 py-20 ">
        {/* Header */}
        <div
          className="relative px-6 md:px-16 py-10 mb-20 flex flex-col-reverse md:flex-row items-center gap-10 bg-cover h-[300px] md:h-[450px] lg:h-[500px] md:bg-fixed bg-center shadow-xl overflow-hidden"
          style={{ backgroundImage: `url(${mainImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-hover/30 to-primary/80 z-10" />
          <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bg tracking-tight leading-tight drop-shadow-lg">
              Financial Status
            </h1>
          </div>
        </div>

        {/* Table + Chart */}
        <div className="px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Table */}
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg ">
              <table className="min-w-full text-sm text-left h-full">
                <thead className="bg-primary text-white">
                  <tr>
                    {Object.entries(financialData[0])
                      .reverse()
                      .map(([label], index) => (
                        <th key={index} className="px-4 py-3 capitalize">
                          {label}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/20 text-primary">
                  {financialData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      {Object.entries(item)
                        .reverse()
                        .map(([label, value], index) => (
                          <td key={index} className="px-4 py-3">
                            {value}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Chart */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-primary text-center mb-6">
                Financial Overview
              </h2>
              <div className="w-full h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={formattedData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {dataKeys.map((key, index) => (
                      <Bar
                        key={key}
                        dataKey={key}
                        fill={`hsl(${index * 60}, 70%, 50%)`}
                        radius={[4, 4, 0, 0]}
                      />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
