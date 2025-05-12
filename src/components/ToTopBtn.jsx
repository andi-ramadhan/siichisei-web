import { useEffect } from "react";
import { ArrowDown } from "./icons/ChevronArrow"

const ToTopBtn = () => {
  useEffect(() => {
    const targetBtn = document.getElementById('toTop');

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        targetBtn.style.display = 'block';
      } else {
        targetBtn.style.display = 'none';
      }
    }

    window.addEventListener('scroll', scrollFunction);
    
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };  
  }, []); // empty dependency array ensure this runs only once after the component mount

  
  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button 
      id="toTop" 
      className="fixed bottom-10 right-10 z-99 bg-word-orange/50 cursor-pointer p-4 rounded-full hover:bg-word-orange hover:shadow-2xl"
      onClick={toTop}
      style={{ display: 'none' }}
    >
      <ArrowDown className="rotate-180 size-8" />
    </button>
  )
}

export default ToTopBtn;