import { useState } from "react";

const ContactPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 50);
  };

  return(
    <main className="w-full h-full font-inter">
      <div className="flex justify-center items-center px-20 pb-20 gap-2 fixed bg-gray-200 h-full w-full">
        <div 
          id='first-container' 
          className="container h-[80dvh] bg-gray-100 gap-2 rounded-xl bg-white flex flex-col justify-center items-center"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-6xl text-gray-blue">Message Us</h2>
            <p className="italic">We accept any question or feedback from you!</p>
            <form className="space-y-6 py-4">
              <>
                <input 
                  type="text" 
                  id="urName"
                  placeholder="Your name" 
                  className="w-full px-2 py-3 rounded-md bg-gray-100/50 border-2 border-gray-blue/30 text-[#2a3e47] focus:outline-none focus:ring-2 focus:ring-word-blue"
                />
              </>
              <>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Email address"
                  className="w-full px-2 py-3 rounded-md text-[#2a3e47] bg-gray-100/50 border-2 border-gray-blue/30 focus:outline-none focus:ring-2 focus:ring-word-blue"
                />
              </>
              <div>
                <textarea 
                  id="message"
                  placeholder="Your messages"
                  rows="4"
                  className="w-full px-2 py-1 rounded-md text-[#2a3e47] bg-gray-100/50 border-2 border-gray-blue/30  focus:outline-none focus:ring-2 focus:ring-word-blue"
                />
              </div>
              <button
                type="submit"
                className={`submit-btn cursor-pointer bg-gray-blue text-white font-semibold rounded-2xl shadow-xl px-6 py-2
                  hover:bg-word-orange hover:text-gray-blue transition-all duration-200 ease-in-out
                  ${isClicked ? 'scale-95' : ''}`}
                onClick={handleClick}
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
        
        <p className="text-2xl">Or</p>


        <div 
          id='second-container' 
          className="container h-[80dvh] bg-gray-100 gap-2 rounded-xl bg-gray-blue flex flex-col justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-6xl text-word-orange font-playwrite">Contact Us!</h2>
            <p className="italic text-word-white-orange">You can directly message us on our social media</p>
          </div>
          
        </div>

      </div>
    </main>
  )
}

export default ContactPage;