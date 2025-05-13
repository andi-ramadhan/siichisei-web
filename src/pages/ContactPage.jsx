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
      <div className="flex justify-center items-center px-20 pb-20 gap-2 fixed h-full w-full">
        <div className="container h-[80dvh] gap-2 rounded-xl bg-linear-to-br from-brick-200 via-pink-200 to-sky-200 flex justify-between items-center px-40">

          <div className="flex flex-col gap-6">
            <h2 className="text-6xl text-word-blue font-playwrite">Contact Us</h2>
            <p className="text-gray-blue w-[50dvh] leading-relaxed text-md">We accept any question or feedback from you! You also can directly message us on our social media.</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <form className="space-y-6 py-4">
              <>
                <input 
                  type="text" 
                  id="urName"
                  placeholder="Your name" 
                  className="w-full px-2 py-3 rounded-md bg-gray-100/50 border-2 border-gray-blue/20 text-[#2a3e47] focus:outline-none focus:ring-2 focus:ring-word-orange"
                />
              </>
              <>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Email address"
                  className="w-full px-2 py-3 rounded-md text-[#2a3e47] bg-gray-100/50 border-2 border-gray-blue/20 focus:outline-none focus:ring-2 focus:ring-word-orange"
                />
              </>
              <div>
                <textarea 
                  id="message"
                  placeholder="Your messages"
                  rows="4"
                  className="w-full px-2 py-1 rounded-md text-[#2a3e47] bg-gray-100/50 border-2 border-gray-blue/20 focus:outline-none focus:ring-2 focus:ring-word-orange"
                />
              </div>
              <button
                type="submit"
                className={`submit-btn cursor-pointer bg-word-blue/70 text-white rounded-2xl shadow-xl px-6 py-2
                  hover:bg-word-blue transition-all duration-200 ease-in-out
                  ${isClicked ? 'scale-95' : ''}`}
                onClick={handleClick}
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>

      </div>
    </main>
  )
}

export default ContactPage;