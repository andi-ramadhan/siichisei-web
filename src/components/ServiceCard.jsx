import { useState } from "react";
import { NavLink } from "react-router-dom"

const ServiceCard = ({ img, imgAlt, title, content, navLinkTo, buttonId }) => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (id) => {
    setClickedButton(id);
    setTimeout(() => {
      setClickedButton(null);
    }, 100);
  };
  
  return(
    <div className="container service-container max-w-2xl h-[78vh] rounded-lg bg-[#fcf8f3]">
      <div className="flex flex-col h-full">
        <div className="image-container w-full h-[300px] bg-[#fadcb5] flex items-center justify-center">
          <img 
            src={img}
            alt={imgAlt}
            className="h-full"
          />
        </div>

        <div className="flex flex-col flex-grow">
          <div className="content flex flex-col items-center justify-center mt-5">
            <h2 className="text-center text-4xl mt-5 text-word-blue">{title}</h2>
            <p className="my-8 max-w-[550px] text-justify text-gray-700 leading-7">
              {content}
            </p>
          </div>

          <NavLink to={navLinkTo}
            className="learn-more flex flex-col items-center my-10 mt-auto"
          >
            <p 
              className={`bg-blue-500 text-gray-200 font-semibold px-6 py-3 rounded 
                          transition-all duration-300
                          hover:bg-blue-600 hover:text-white hover:shadow-xl
                          ${clickedButton === buttonId ? 'scale-95' : ''}`}
              onClick={() => handleClick(buttonId)}
            >
              Pelajari Lebih Lanjut</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard;