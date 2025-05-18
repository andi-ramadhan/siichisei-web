import { useEffect, useRef } from "react";
import QuoteIcon from "./icons/QuoteIcon";
import CloseIcon from "./icons/CloseIcon";

const Card = ({
  className = '',
  studentMessage,
  studentName,
  studentTitle,
  imgSrc,
  isActive,
  onClick
}) => {
  const blockquoteRef = useRef(null);

  // Reset scroll position when closing
  useEffect(() => {
    if (!isActive && blockquoteRef.current) {
      blockquoteRef.current.scrollTop = 0;
    }
  }, [isActive]);

  return (
    <section className="flex flex-row">
      <article
        className={`size-100 shadow-2xl flex py-7 px-10 rounded-2xl font-inter transition-all duration-500 ease-in-out bg-white
        ${className} ${isActive ? 'w-120 scale-130 z-1' : 'cursor-pointer'}`}
        onClick={e => {
          e.stopPropagation();
          onClick();
        }}
        style={{ position: 'relative' }}
      >
        {isActive && (
          <button
            className="absolute top-8 right-8 z-20 cursor-pointer"
            onClick={e => {
              e.stopPropagation();
              onClick(null); //pass null to close the card
            }}
            aria-label="Close"
            type='button'
          >
            <CloseIcon className="group" classChild="bg-gray-400 rounded-full group-hover:bg-gray-blue" size="h-5 w-1" />
          </button>
        )}
        <div className="relative flex flex-col h-full">
          <QuoteIcon className="w-12 py-5 opacity-40 absolute"/>
          <blockquote 
            ref={blockquoteRef}
            className={`font-semibold text text-gray-blue my-auto text-balance
            ${isActive ? 'max-h-[140px] overflow-auto text-md p-4' : 'text-xl line-clamp-3'}`}
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