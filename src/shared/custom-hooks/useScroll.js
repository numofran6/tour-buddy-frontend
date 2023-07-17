import { useState, useEffect } from "react";

export const useScroll = (scrollContainerRef, scrollStep = 500) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    setMaxScroll(scrollContainer.scrollWidth - scrollContainer.clientWidth);
    const handleScroll = () => setScrollLeft(scrollContainer.scrollLeft);
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainerRef]);

  const handleScroll = (scrollOffset) => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.scrollTo({
      left: scrollContainer.scrollLeft + scrollOffset,
      behavior: "smooth",
    });
  };

  const handlePreviousClick = () => {
    handleScroll(-scrollStep);
  };

  const handleNextClick = () => {
    handleScroll(scrollStep);
  };

  return {
    scrollLeft,
    maxScroll,
    handlePreviousClick,
    handleNextClick,
  };
};
