import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import { testimonialData } from "../utils/testimonialData";

const TestimonialsPage = () => {
  const scrollContainerRef = useRef(null);
  const [isAnyCardClicked, setAnyCardClicked] = useState(false);

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2; //start at the middle
    }
  }, []);
  
  return(
    <main className="w-full h-screen fixed font-inter bg-word-orange/80">
      <div className="flex flex-col h-full w-full my-20">
        <h2 className="text-6xl text-gray-blue text-center font-extralight font-playwrite">
          Testimonials
        </h2>
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-scroll custom-scroll-bar w-full h-full px-10 pt-15 pb-45">
          <div className="flex gap-5">
            {/* original cards */}
            {testimonialData.map((data, index) => (
              <Card 
                key={index} 
                className="flex-shrink-0"
                studentMessage={data.studentMessage}
                studentName={data.studentName}
                studentTitle={data.studentTitle}
                imgSrc={data.imgSrc}
                isAnyCardClicked={isAnyCardClicked}
                setAnyCardClicked={setAnyCardClicked}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default TestimonialsPage;