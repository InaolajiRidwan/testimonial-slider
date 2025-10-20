import React from "react";


export default function LeftSection({
  displayData,
  prevBtn,
  nextBtn,
  iconprev,
  iconNext,
  patternBg
}) {
  return (
    <div className="relative md:order-2">
      <img src={patternBg} alt="" className="relative h-full w-full" />

      <img
        src={displayData.image}
        alt=""
        className="absolute top-1/2 left-1/2 h-[80%] md:h-[70%] w-auto transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-lg"
      />

      <div className="absolute bottom-4 md:bottom-10 lg:bottom-15 left-1/2 md:left-34 lg:left-60 transform -translate-x-1/2 flex gap-6 bg-white p-3 rounded-2xl shadow-lg">
        <button
          onClick={prevBtn}
          className="cursor-pointer ursor-pointer hover:bg-gray-mentor p-2 rounded-full active:bg-blue-mentor  "
        >
          <img
            src={iconprev}
            alt="Previous"
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </button>
        <button
          onClick={nextBtn}
          className="cursor-pointer hover:bg-gray-mentor p-2 rounded-full active:bg-blue-mentor "
        >
          <img src={iconNext} alt="Next" className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}
