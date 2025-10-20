import { useState } from "react";
import patternQuote from "./assets/pattern-quotes.svg";
import patternBg from "./assets/pattern-bg.svg";
import iconprev from "./assets/icon-prev.svg";
import iconNext from "./assets/icon-next.svg";

import { data } from "./data";
import HomePage from "./pages/HomePage";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayData = data[currentIndex];

  const prevBtn = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextBtn = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <HomePage
        iconNext={iconNext}
        patternQuote={patternQuote}
        patternBg={patternBg}
        iconprev={iconprev}
        displayData={displayData}
        prevBtn={prevBtn}
        nextBtn={nextBtn}
      />
      <div class="text-center text-sm mt-10 md:mt-0 md:text-xl ">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io/profile/InaolajiRidwan" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <span className="text-red-400 font-extrabold"><a href="#">Inaolaji Adewale Ridwan</a></span>.
      </div>
    </div>
  );
}

export default App;
