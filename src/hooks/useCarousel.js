import { useEffect } from "react";

const useCarousel = (carouselWrapperSelector, prevSelector, nextSelector) => {
  useEffect(() => {
    const carouselWrapper = document.querySelector(carouselWrapperSelector);
    const prevButton = document.querySelector(prevSelector);
    const nextButton = document.querySelector(nextSelector);

    if (!carouselWrapper || !prevButton || !nextButton) {
      console.error("Carousel elements not found");
      return;
    }

    const totalItems = carouselWrapper.children.length;
    let currentIndex = 0;

    function updateCarousel(index) {
      const offset = -index * 100; // calculate the offset for the current slide
      carouselWrapper.style.transform = `translateX(${offset}%)`;
    }

    const handlePrevClick = () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel(currentIndex);
    };

    const handleNextClick = () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel(currentIndex);
    };

    prevButton.addEventListener("click", handlePrevClick);
    nextButton.addEventListener("click", handleNextClick);

    // init the caraousel
    updateCarousel(currentIndex);

    // cleanup events and unmount
    return () => {
      prevButton.removeEventListener('click', handlePrevClick);
      nextButton.removeEventListener('click', handleNextClick);
    };
  }, [carouselWrapperSelector, prevSelector, nextSelector]);
};

export default useCarousel;