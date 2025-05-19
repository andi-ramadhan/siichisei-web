import { useLocation, useNavigate, Link } from "react-router-dom";
import CloseIcon from "../../components/icons/CloseIcon";
import { useEffect, useRef } from "react";
import { privateClassSidebar } from "../../utils/servicesSidebarData";
import { privateClassContent } from "../../utils/servicesContentData";

const PrivateClass = () => {
  const navigate = useNavigate();
  const idLocation = useLocation();
  const contentRef = useRef(null);

  const handleClose = () => {
    navigate('/services');
  };

useEffect(() => {
  if (idLocation.hash && contentRef.current) {
    const id = location.hash.replace('#', '');
    const element = document.getElementById(id);
    if (element && contentRef.current) {
      // Scroll only inside the content area, not the whole page
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
          <h2 className="text-5xl font-light px-10 py-5 tracking-wider text-word-blue">Private Class Details</h2>
        </div>        

        <div className="overflow-y-auto h-full">          
          <div className="relative flex flex-row h-full">

            {/* SIDEBAR */}
            <aside className="sticky top-0 left-0 w-1/7 flex flex-col gap-7 text-md text-gray-800 px-5 justify-start pt-10">
              {privateClassSidebar.map((section, idx) => (
                <div key={idx}>
                  <p>{section.label}</p>
                  <div className="flex flex-col gap-4 text-white uppercase">
                    {section.links.map(link => (
                      <Link
                        key={link.text}
                        to={link.to}
                        className="rounded-lg bg-word-blue text-center py-2 hover:bg-dark-blue transition-all duration-150"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </aside>

            {/* CONTENTS */}
            <div ref={contentRef} className="flex flex-col gap-35 w-6/7 overflow-y-auto">
              {privateClassContent.map(section => (
                <div
                  key={section.id}
                  id={section.id}
                  className={section.sectionClass}
                >
                  <div className="px-30 relative">
                    {section.icon}
                    <h3 className={section.titleClass}>{section.title}</h3>
                    {section.content}
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

export default PrivateClass;