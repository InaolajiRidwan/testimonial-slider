import React from "react";

export default function RightSection({patternQuote,displayData}) {
  return (
    <div className="relative flex items-center justify-center md:order-1">
      {/* Pattern Quote Background */}
      <img
        src={patternQuote}
        alt="Quote Pattern"
        className="absolute w-32 md:w-40 opacity-50 top-0 lg:top-40"
      />

      {/* Quote Card */}
      <div className="relative p-6 md:p-8 rounded-2xl flex flex-col gap-4 max-w-2xl text-center">
        <p className="text-lg md:text-xl lg:text-2xl font-light tracking-wider leading-loose text-blue-mentor">
          〝 {displayData.quote} 〞
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-4 space-y-2 md:space-y-0 text-lg md:text-2xl">
          <p className="text-black font-bold">{displayData.name}</p>
          <p className="text-gray-mentor font-normal">{displayData.role}</p>
        </div>
      </div>
    </div>
  );
}
