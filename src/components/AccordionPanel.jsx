import { useEffect, useRef } from "react";
import { ArrowDown } from "./icons/ChevronArrow";

const AccordionPanel = ({ title, children, isActive, hasActive, onToggle }) => {
  const contentRef = useRef(null); // reference to the content for dynamic height
  const panelRef = useRef(null); // ref to the panel for scrolling

  useEffect(() => {
    if (isActive && panelRef.current) {
      panelRef.current.scrollIntoView({
        block: 'center',
      });
    }
  }, [isActive]);

  return (
    <section
      ref={panelRef}
      className={`accordion-panel relative w-1/2 flex flex-col justify-center mx-auto gap-3 border-1 border-gray-300 p-5 rounded-lg min-w-[800px]
      ${isActive ? 'border-word-orange' : hasActive ? 'opacity-50' : 'opacity-100'}`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg text-gray-700 font-semibold m-0 p-0">{title}</h3>
        <button onClick={onToggle}>
          <ArrowDown 
            className={`size-7 transition-transform duration-500 cursor-pointer
            ${ isActive ? 'rotate-x-180' : 'rotate-0' }`}
          />
        </button>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500"
        style={{
          height: isActive ? `${contentRef.current?.scrollHeight}px` : '0px'
        }}
      >
        <div className="mt-3 leading-relaxed text-pretty text-gray-600 pr-15">{children}</div>
      </div>
    </section>
  );
}

export default AccordionPanel;