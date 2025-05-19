import { useCallback } from "react";

const Welcome = () => {
  const handleLearnMore = useCallback(() => {
    const insightSection = document.getElementById('insight');
    if (insightSection) {
      insightSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <main id="welcome" className="bg-white relative">
      <div className="flex flex-col justify-center items-center text-center overflow-hidden font-inter">
        <img
          className="bg-cover h-full w-full relative" 
          src={'bg-cutted.webp'}
        />
        <div className="absolute top-25">
          <img
            className="size-100 mx-auto" 
            src={'logo-png.webp'}
          />
          <h2 className="text-gray-700 text-5xl mb-10 font-semibold">
            Find your truly way of Vocal Journey
          </h2>
          <p className="text-2xl text-gray-600 font-light">
            SiiChiSei is your Vocal Journey companion,
            dedicated to assisting you with Technical Voice Lessons,<br />no matter where you are. Provide reliable support to develop your vocal skills.</p>
          <button 
            className="px-6 py-3 mt-10 rounded-md text-white text-xl button-fx"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}

export default Welcome;