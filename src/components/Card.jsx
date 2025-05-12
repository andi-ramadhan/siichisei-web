import { useRef, useState } from "react";
import QuoteIcon from "./icons/QuoteIcon";

const Card = ({ className = '', studentMessage, studentName, studentTitle, imgSrc, isAnyCardClicked, setAnyCardClicked }) => {
  const [isClicked, setClicked] = useState(false);
  const blockquoteRef = useRef(null);

  const handleClick = () => {
    if (isAnyCardClicked && !isClicked) return; // prevent clicking other cards
    if (isClicked && blockquoteRef.current) {
      blockquoteRef.current.scrollTop = 0; //reset scroll position
    }
    setClicked((prevState) => !prevState); //toggle the state
    setAnyCardClicked(!isClicked); //update global state
  };

  return (
    <section className="flex flex-row cursor-pointer">
      <article
        className={`size-100 shadow-2xl flex py-7 px-10 rounded-2xl font-inter transition-all duration-500 ease-in-out bg-white
        ${className} ${isClicked ? 'w-120 scale-130 backdrop-blur-xl z-1 bg-white/50' : ''}`}
        onClick={handleClick}
      >
        <div className="relative flex flex-col h-full">
          <QuoteIcon className="w-12 py-5 opacity-40 absolute"/>
          <blockquote 
            ref={blockquoteRef}
            className={`font-semibold text text-gray-blue my-auto text-balance
            ${isClicked ? 'text-shadow-[0_2px_2px] max-h-[140px] overflow-auto text-shadow-white text-md p-4' : 'text-xl line-clamp-3'}`}
          >
            {studentMessage}
          </blockquote>
          <div className="flex flex-row gap-5 items-center">
            <img 
              src={imgSrc}
              className="w-15 h-15 rounded-full ring-1 ring-gray-blue object-cover"
            />
            <div className="text-gray-blue">
              <h4 className="font-bold">{studentName}</h4>
              <p className="opacity-80 text-sm">{studentTitle}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Card;