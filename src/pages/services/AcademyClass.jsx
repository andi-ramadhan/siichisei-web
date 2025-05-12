import { useNavigate } from "react-router-dom";
import CloseIcon from "../../components/icons/CloseIcon";
import CheckIcon from "../../components/icons/CheckIcon";
import { useState } from "react";
import ClassIcon from "../../components/icons/ClassIcon";

const AcademyClass = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/services');
  };

  const handleClick = (buttonId) => {
    setClickedButton(buttonId);
    setTimeout(() => {
      setClickedButton(null);
    }, 200);
  };

  const scrollJS = (value) => {
    return (e) => {
      e.preventDefault();
      const targetElement = document.getElementById(value);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  };

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
                <a
                  href="#class-status"
                  onClick={scrollJS('class-status')}
                  className="rounded-lg bg-word-blue text-center py-2 hover:bg-dark-blue transition-all duration-150"
                >
                  Class Status
                </a>
                <a 
                  href="#prices" 
                  onClick={scrollJS('prices')}
                  className="rounded-lg bg-word-blue text-center py-2 hover:bg-dark-blue transition-all duration-150"
                >
                  Prices
                </a>
              </div>
            </aside>

            {/* CONTENTS */}
            <div className="flex flex-col gap-35 w-6/7 overflow-y-auto">

              {/* CONTENT 1 */}
              <div id="class-status" className="flex flex-col gap-2 h-full py-50 w-full justify-center bg-gray-blue">
                <div className="px-30 relative">
                <ClassIcon className="absolute top-0 right-10 w-120 opacity-30 z-1" />
                  <h3 className="font-semibold text-5xl mb-4 text-word-orange uppercase">Class status</h3>
                  <div className="flex flex-col gap-5 text-lg text-word-white-orange">
                    <p className="font-semibold text-2xl">Past Academy Class:</p>
                    <p className="text-justify leading-relaxed">
                      <ol className="flex flex-col pl-5 gap-2 list-disc">
                        <li>SiiChiSei Academy Batch 1: Komponen Anatomi Vokal (3 bulan)</li>
                        <li>SiiChiSei Academy Batch 2: Register Vokal (3 bulan)</li>
                        <li className="text-word-orange font-semibold">SiiChiSei Academy Batch 3: Vibrato (3 bulan) - On Going</li>
                      </ol>
                    </p>
                    <p className="font-semibold text-2xl">Available Academy Class:</p>
                    <p className="text-justify leading-relaxed italic">
                      Coming Soon
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTENT 2 */}
              <div id="prices" className="flex flex-col gap-2 h-full py-50 justify-center">
                <div className="px-30">
                  <div className="flex flex-row gap-10 h-[50vh] justify-center items-center text-lg text-gray-800">
                    
                    <div className="card flex flex-col h-full w-[60dvh] rounded-xl p-10 transition-all bg-word-orange duration-300 hover:scale-102">
                      <p className="text-2xl font-semibold uppercase mb-10 text-gray-blue">Monthly</p>
                      <h4 className="mb-5">
                        <span className="text-4xl">IDR 200.000</span>/month
                      </h4>
                      <button 
                        className={`bg-gray-blue hover:bg-dark-blue transition-all duration-200 text-white rounded-md py-2 cursor-pointer font-semibold
                                  ${clickedButton === 'contact-private-class' ? 'scale-98' : ''}`}
                        onClick={() => handleClick('contact-private-class')}
                      >
                          Contact us
                      </button>
                      <div className="my-5 flex flex-col gap-4">
                        <p><span className="text-xl">Benefit</span></p>
                        <ul className="flex flex-col gap-2">
                          <li className="flex items-center gap-2">
                            <CheckIcon className="w-6 h-6 text-gray-blue" />
                            Kelas 4x pertemuan
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckIcon className="w-6 h-6 text-gray-blue" />
                            Mentoring 24x pertemuan
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckIcon className="w-6 h-6 text-gray-blue" />
                            Free konsultasi selama berada di kelas
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckIcon className="w-6 h-6 text-gray-blue" />
                            File PPT materi
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="card2 flex flex-col h-full w-[60dvh] rounded-xl p-10 bg-gray-blue transition-all duration-300 hover:scale-102">
                      <p className="text-2xl font-semibold uppercase mb-10 text-word-orange">FULL-CLASS</p>
                      <h4 className="mb-5 text-word-white-orange text-4xl">
                        IDR 550.000
                      </h4>
                      <button 
                        className={`bg-word-orange text-black rounded-md py-2 cursor-pointer font-semibold
                                    hover:bg-bg-base-orange transition-all duration-200
                                    ${clickedButton === 'contact-academy' ? 'scale-98' : ''}`}
                         onClick={() => handleClick('contact-academy')}
                      >
                        Contact us
                      </button>
                      <div className="my-5 flex flex-col gap-4 text-word-white-orange">
                        <p><span className="text-xl">Benefit</span></p>
                        <ul className="flex flex-col gap-2">
                          <li className="flex items-center gap-2">
                            <CheckIcon className="w-6 h-6 text-word-orange" />
                            Kelas 12x pertemuan
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckIcon className="w-6 h-6 text-word-orange" />
                            Mentoring 72x pertemuan
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckIcon className="w-6 h-6 text-word-orange" />
                            Free konsultasi selama berada di kelas
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckIcon className="w-6 h-6 text-word-orange" />
                            File PPT materi
                          </li>
                        </ul>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
              
            </div>

          </div>
        </div>        
      </div>
    </section>
  );
};

export default AcademyClass;