import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import CloseIcon from "../../components/icons/CloseIcon";
import CheckIcon from "../../components/icons/CheckIcon";
import { academyClassSidebar } from "../../utils/servicesSidebarData";
import { academyClassContent } from "../../utils/servicesContentData";
import priceCards from "../../utils/servicesPriceCardData";

const AcademyClass = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const navigate = useNavigate();
  const idLocation = useLocation();
  const contentRef = useRef(null);

  const handleClose = () => {
    navigate('/services');
  };

  const handleShowPopup = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setPopupVisible(true), 10); //trigger animation after mount
  };

  const handleHidePopup = () => {
    setPopupVisible(false);
    setTimeout(() => setShowPopup(false), 200); // match transition duration
  };

  useEffect(() => {
    if (idLocation.hash && contentRef.current) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element && contentRef.current) {
        // scroll only inside the content area
        contentRef.current.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }, [idLocation]);

  return(
    <section 
      className="absolute bg-gray-400/20 h-[86vh] w-full flex justify-center items-center z-50 font-inter"
      onClick={handleClose}
    >
      <div 
        className="bg-[#fdfeff] w-5/6 h-19/20 rounded-lg shadow-2xl shadow-gray-600 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* HEADER */}
        <div className="flex flex-row items-center shadow-lg p-5">
          <button
            className="close-button px-4 py-2 text-white rounded cursor-pointer"
            onClick={handleClose}
          >
            <CloseIcon 
              className="rounded-lg group hover:bg-word-blue transition-all duration-200 p-8"
              classChild="group-hover:bg-white transition-all duration-200"
            />
          </button>
          <h2 className="text-5xl font-light px-10 py-5 tracking-wider text-word-blue">Academy Details</h2>
        </div>        

        <div className="overflow-y-auto h-full">          
          <div className="relative flex flex-row h-full">

            {/* SIDEBAR */}
            <aside className="sticky top-0 left-0 w-1/7 flex flex-col gap-7 text-md text-gray-800 px-5 justify-start pt-10">
              <div className="flex flex-col gap-4 text-white uppercase">
                {academyClassSidebar.map(link => (
                  <Link
                    key={link.text}
                    to={link.to}
                    className="rounded-lg bg-word-blue text-center py-2 hover:bg-dark-blue transition-all duration-150"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </aside>

            {/* CONTENTS */}
            <div ref={contentRef} className="flex flex-col gap-35 w-6/7 overflow-y-auto">
              {academyClassContent.map(section => (
                <div
                  key={section.id}
                  id={section.id}
                  className={section.sectionClass}
                >
                  <div className="px-30 relative">
                    {section.icon}
                    <h3 className={section.titleClass}>{section.title}</h3>
                    {section.id === "prices" ? (
                      <div className="flex flex-row gap-10 h-[50dvh] justify-center items-center text-lg">
                        {priceCards.map((card, idx) => (
                          <div
                            key={card.type}
                            className={`flex flex-col h-full w-[60dvh] rounded-xl p-10 transition-all duration-300 hover:scale-102 ${card.cardClass}`}
                          >
                            <p className="text-2xl font-semibold uppercase mb-10">{card.type}</p>
                            <h4 className="mb-5">
                              <span className="text-4xl">{card.price}</span>{card.priceSuffix}
                            </h4>
                            <button
                              onClick={handleShowPopup}
                              className={card.btnClass}
                            >
                              Contact us
                            </button>
                            <div className="my-5 flex flex-col gap-4">
                              <p><span className="text-xl">Benefit</span></p>
                              <ul className="flex flex-col gap-2">
                                {card.benefits.map(benefit => (
                                  <li key={benefit} className="flex items-center gap-2">
                                    <CheckIcon className={`w-6 h-6 ${card.iconColor}`} />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                        {/* POPUP */}
                        {showPopup && (
                          <div 
                            id="popup" 
                            className="fixed top-0 bottom-0 right-0 bg-black/30 w-full flex justify-center items-center z-70 font-inter"
                            onClick={handleHidePopup}
                          >
                            <div 
                              className={`
                                w-[30%] bg-white rounded-lg p-8 text-gray-blue
                                transition-all duration-200
                                ${popupVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
                              `}
                              onClick={e => e.stopPropagation()}
                            >
                              <span className="flex justify-between items-center pb-3">
                                <h2 className="text-2xl font-semibold text-word-blue">Mohon Maaf</h2>
                                <button 
                                  className="text-3xl font-extrabold hover:text-word-blue transition-colors duration-200 cursor-pointer"
                                  onClick={handleHidePopup}
                                  aria-label="Close"
                                >
                                  &times;
                                </button>
                              </span>
                              <p className="leading-relaxed text-pretty">
                                Mohon maaf, pendaftaran siswa baru SiiChiSei Academy belum dibuka kembali.
                                Silahkan kunjungi media sosial SiiChiSei untuk informasi lebih lanjut!
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      section.content
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>        
      </div>
    </section>
  );
};

export default AcademyClass;