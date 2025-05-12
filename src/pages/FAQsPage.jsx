import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import AccordionPanel from "../components/accordionPanel";
import { accordionData } from "../utils/faqsData";
import Footer from "../components/Footer";
import ToTopBtn from "../components/ToTopBtn";

const FAQsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');


  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index); //toggle the panel
  };

  const hasActive = activeIndex !== null;

  const filteredData = accordionData.filter((item) => {
    const childrenText = renderToStaticMarkup(item.children);
    return(
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      childrenText.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return(
    <>
      <ToTopBtn />
      <main className="w-full h-full flex justify-center items-center my-5">
        <div className="container flex flex-col items-center mt-10 py-15 min-h-screen overflow-y-auto rounded-lg shadow-2xl shadow-word-blue font-inter text-gray-600">
          
          <div className="header flex flex-col gap-3 w-1/2 text-wrap text-center">
            <h2 className="text-5xl text-gray-700">Frequently Asked Question</h2>
            <p className="text-lg">
              Ada pertanyaan lain terkait SiiChiSei? Anda bisa 
              menanyakannya <a href="#" className="text-word-blue rounded-full hover:bg-gray-700 hover:py-1 hover:px-4 hover:text-white transition-all duration-150">disini</a>
            </p>
            {/* search bar */}
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full mt-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-word-blue"
            />
          </div>

          {/* accordion panels */}
          <div className="accordion-container mt-10 flex flex-col gap-5 items-center">
            {filteredData.map((item, index) => (
              <AccordionPanel
                key={index}
                title={item.title}
                isActive={activeIndex === index}
                hasActive={hasActive}
                onToggle={() => togglePanel(index)}
              >
                {item.children}
              </AccordionPanel>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default FAQsPage;