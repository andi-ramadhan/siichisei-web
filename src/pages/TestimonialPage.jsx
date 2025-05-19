import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import { testimonialData } from "../utils/testimonialData";
import Footer from "../components/Footer"

const TestimonialsPage = () => {
  const scrollContainerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  const handleOutsideClick = (e) => {
    if (e.target === scrollContainerRef.current) {
      setActiveCard(null);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft = 0;
    }
  }, []);
  
  return(
    <>
      <main className="w-full h-screen font-inter bg-word-orange/80">
        <div className="flex flex-col h-full w-full py-20">
          <h2 className="text-6xl text-gray-blue text-center font-extralight font-playwrite">
            Testimonials
          </h2>
          <div 
            ref={scrollContainerRef}
            onClick={handleOutsideClick}
            className="flex overflow-x-scroll custom-scroll-bar w-full px-10 pt-15 pb-45"
          >  
            <div className="flex gap-5">
              {testimonialData.map((data, index) => (
                <Card 
                  key={data.id || index} 
                  className="flex-shrink-0"
                  studentMessage={data.studentMessage}
                  studentName={data.studentName}
                  studentTitle={data.studentTitle}
                  imgSrc={data.imgSrc}
                  isActive={activeCard === index}
                  onClick={val => setActiveCard(val === null ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TestimonialsPage;