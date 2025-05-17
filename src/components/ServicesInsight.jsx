import { useState } from "react";
import { Link } from "react-router-dom";

const ServicesInsight = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (buttonId) => {
    setClickedButton(buttonId);
    setTimeout(() => {
      setClickedButton(null);
    }, 200);
  };

  return (
    <section className="w-full min-h-[60vh] bg-bg-base-orange font-inter mt-10 relative overflow-hidden">
      {/* BG Logo */}
      <div className="absolute inset-0 w-full h-full -top-10" aria-hidden="true">
        <img 
          src="/logo-black.png"
          className="absolute w-[40rem] -left-1/5 opacity-20"
          alt="Background Logo"
        />
        <img 
          src="/logo-black.png"
          className="absolute w-[40rem] -right-1/5 opacity-20"
          alt="Background Logo"
        />
      </div>

      {/* Content Container */}
      <div className="h-full min-h-[60vh] flex items-center justify-center">
        <div className="grid grid-rows-1 gap-10 max-w-4xl w-full">
          {/* First Card */}
          <div className="content-container bg-graybase rounded-lg p-5 shadow-lg hover:shadow-2xl transition-shadow ">
            <div className="w-full h-full flex flex-row gap-10 content-card p-5">
              <div className="flex flex-col items-center my-auto card-header text-4xl">
                <p className="text-fit tracking-[0.08em]">SiiChiSei</p>
                <p className="text-fit tracking-[0.02em]">Academy</p>
              </div>
              <p className="text-gray-700 text-md card-content max-w-[450px]">
                Akademi vokal dari SiiChiSei dengan kurikulum up-to-date, komprehensif, 
                mentoring serta challenge sesuai kebutuhan siswa, dan pembelajaran 
                intensif selama 3 bulan
              </p>
              <Link to='/services/academy-class'>
                <button className={`content-btn text-md rounded bg-[#3990d8] hover:bg-[#317bb8] text-white 
                w-25 h-25 text-wrap
                ${clickedButton === 'academy' ? 'scale-95' : ''}`}
                onClick={() => handleClick('academy')}
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Second Card */}
          <div className="content-container bg-graybase rounded-lg p-5 shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-full h-full flex flex-row gap-10 content-card p-5">
              <div className="flex flex-col items-center my-auto card-header text-4xl">
                <p className="text-fit tracking-[0.08em]">SiiChiSei</p>
                <p className="text-fit no-wrap text-2xl">Private Class</p>
              </div>
              <p className="text-gray-700 text-md card-content max-w-[450px]">
                Fokus di materi-materi tertentu. Mentoring & challenge rutin membangun kedisiplinan di atas kokohnya 
                fondasi pembelajaranmu.
              </p>
              <Link to='/services/private-class'>
                <button className='content-btn text-md rounded bg-[#3990d8] hover:bg-[#317bb8] text-white w-25 h-25 text-wrap'
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesInsight;