import { useState, useRef } from "react";

export const Explore = () => {
  const scrollRefContainer = useRef(null);
  const [canScrollLeft, setcanScrollLeft] = useState(false);
  const optionsArray = [
    "Music",
    "Podcast",
    "Thrillers",
    "Comedy",
    "T-Series",
    "TVF",
    "APIs",
    "Live",
    "Stocks",
    "Recently uploaded",
    "Shark Tank",
    "Standup",
    "Exercise",
    "Mantras",
    "News",
    "K-pop",
    "Salaar",
    "Discrete Mathematics",
    "Machine Learning",
    "Ryzen processors",
    "Goldmines Telefilms",
    "Hombale Films",
    "Gaming",
  ];
  const handleForwardScroll = () => {
    if (scrollRefContainer.current) {
      scrollRefContainer.current.scrollLeft += 250;
      setcanScrollLeft(true);
    }
  };
  const handleBackwardScroll = () => {
    scrollRefContainer.current.scrollLeft -= 250;
    if (scrollRefContainer.current.scrollLeft <= 250) {
      setcanScrollLeft(false);
    }
  };

  return (
    <div
      className="h-12 w-full mb-2 flex items-center justify-evenly overflow-x-scroll whitespace-nowrap scrollbar-hidden scroll-smooth pr-14"
      ref={scrollRefContainer}
    >
      <div className="hidden min-[778px]:flex">
        {canScrollLeft && (
          <button
            className="absolute z-3 left-18 top-12 bg-black hover:bg-[#3F3F3F] p-2 rounded-full cursor-pointer"
            onClick={handleBackwardScroll}
          >
            <img
              src="/images/left.png"
              alt="left"
              className="size-6 invert-100"
            />
          </button>
        )}
      </div>
      <div className="h-8 w-11 bg-[#FFFFFF1A] flex-shrink-0 ml-4 mr-3 flex items-center justify-center rounded-sm lg:hidden">
        <img
          src="/images/explore-icon.png"
          alt="explore-icon"
          className="w-5 h-5"
        />
      </div>
      <div className="h-8 flex-shrink-0 mr-3 flex items-center justify-center">
        <div className="h-full bg-white rounded-md flex items-center justify-center px-3">
          <h1 className="text-black text-sm font-medium">All</h1>
        </div>
      </div>
      {optionsArray.map((option, key) => (
        <div
          className="h-8 flex-shrink-0 mr-3 flex items-center justify-center"
          key={key}
        >
          <div className="h-full bg-[#FFFFFF1A] rounded-md flex items-center justify-center px-3">
            <h1 className="text-white text-sm font-medium">{option}</h1>
          </div>
        </div>
      ))}
      <div className="hidden min-[778px]:flex">
        <button
          className="absolute z-3 right-4 top-12  bg-black hover:bg-[#3F3F3F] p-2 rounded-full cursor-pointer"
          onClick={handleForwardScroll}
        >
          <img
            src="/images/right.png"
            alt="left"
            className="size-6 invert-100"
          />
        </button>
      </div>
    </div>
  );
};
