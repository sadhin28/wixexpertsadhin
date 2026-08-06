import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubContributions = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [blockSize, setBlockSize] = useState(15);
  const [fontSize, setFontSize] = useState(16);
  const [blockMargin, setBlockMargin] = useState(4);
  const [containerPadding, setContainerPadding] = useState("px-4");
  const [selectFullWidth, setSelectFullWidth] = useState(false);

  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // mobile
        setBlockSize(8);
        setFontSize(10);
        setBlockMargin(2);
        setContainerPadding("px-2");
        setSelectFullWidth(true);
      } else if (width < 1024) {
        // tablet
        setBlockSize(12);
        setFontSize(14);
        setBlockMargin(3);
        setContainerPadding("px-4");
        setSelectFullWidth(false);
      } else {
        // desktop
        setBlockSize(15);
        setFontSize(16);
        setBlockMargin(4);
        setContainerPadding("px-6");
        setSelectFullWidth(false);
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  // Only current and previous year for dropdown (your choice)
  const years = [];
  for (let y = currentYear; y >= currentYear - 1; y--) {
    years.push(y);
  }

  return (
    <section className=" text-center ">
      <h2 className="text-2xl md:text-4xl font-bold py-5 font-bold mb-4 text-white">Our GitHub <span className="text-blue-500">Contributions</span> </h2>
     <div className="gap-10 md:flex md:flex-row-reverse md:justify-center px-5">
        <div >
        <label
          htmlFor="year-select"
          className="text-white mr-2 block mb-2 font-bold"
        >
          Select Year
        </label>
        <select
          id="year-select"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
          className={`md:my-0 my-3 bg-[#222E3FFF] text-white p-2 rounded border border-gray-700 ${
            selectFullWidth ? "w-full" : "w-auto"
          }`}
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
      <div
        className={`border p-5 border rounded-xl hover:border-blue-500 overflow-x-auto md:w-full ${containerPadding} w-full max-w-[900px]`}
        style={{ WebkitOverflowScrolling: "touch" }} // smooth scroll on iOS
      >
        <GitHubCalendar
          username="sadhin28"
          blockSize={blockSize}
          blockMargin={blockMargin}
          fontSize={fontSize}
          year={year}
         
        />
      </div>
     </div>
    </section>
  );
};

export default GitHubContributions;
