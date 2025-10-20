import React from "react";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

export default function HomePage({
  displayData,
  prevBtn,
  nextBtn,
  iconNext,
  iconprev,
  patternBg,
  patternQuote,
}) {
  return (
    <div className="flex justify-center items-center h-screen mt-12  md:mt-0 lg:overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 grid-flow-row">
        {/* Left Section (Image) */}
        <LeftSection
          displayData={displayData}
          prevBtn={prevBtn}
          nextBtn={nextBtn}
          iconNext={iconNext}
          iconprev={iconprev}
          patternBg={patternBg}
        />

        {/* Right Section (Quote) */}
        <RightSection patternQuote={patternQuote} displayData={displayData} />
      </div>
    </div>
  );
}
