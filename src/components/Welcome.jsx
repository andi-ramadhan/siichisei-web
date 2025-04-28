import { useState } from "react";
import Background from "./Background";

const Welcome = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <main id="welcome" className="bg-white relative">
      <div className="flex flex-col justify-center items-center text-center overflow-hidden font-inter">
        <Background />
        <div className="absolute top-25">
          <img
            className="size-100 mx-auto" 
            src={'logo-png.png'}
          />
          <h2 className="text-gray-700 text-5xl font-light mb-10">
            Find your truly way of <span className="font-semibold">Vocal Journey</span>
          </h2>
          <p className="text-2xl text-gray-600 font-light">
            <span className="font-semibold">SiiChiSei</span> is your <span className="font-semibold">Vocal Journey companion</span>,
            dedicated to assisting you with <span className="font-semibold">Technical Voice Lessons</span>,<br />no matter where you are. Provide reliable support to develop your vocal skills.</p>
          <button className={`px-6 py-3 mt-10 rounded-md text-white text-xl button-fx
            ${isClicked ? 'scale-95' : ''}`}
            onClick={handleClick}
          >
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}

export default Welcome;