import { Outlet } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import serviceCards from "../utils/serviceCardData";
import Footer from "../components/Footer";


const ServicePage = () => {
  return(
    <>
      <main className="w-full h-full py-15 flex flex-row gap-10 justify-center items-center font-inter">
        {serviceCards.map(card => (
          <ServiceCard 
            key={card.buttonId}
            img={card.img}
            imgAlt={card.imgAlt}
            title={card.title}
            content={card.content}
            navLinkTo={card.navLinkTo}
            buttonId={card.buttonId}
          />
        ))}
        {/* Render nested routes or child routes */}
        <Outlet />  
      </main>
      <Footer />
    </>
  )
}

export default ServicePage;

