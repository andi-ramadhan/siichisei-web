import { Link } from "react-router-dom";
import services from "../utils/servicesInsightArray";

const ServicesInsight = () => {
  return (
    <section className="w-full min-h-[60vh] bg-bg-base-orange font-inter mt-10 relative overflow-hidden">
      {/* BG Logo */}
      <div className="absolute inset-0 w-full h-full -top-10" aria-hidden="true">
        <img 
          src="/logo-black.webp"
          className="absolute w-[40rem] -left-1/5 opacity-20"
          alt="Background Logo"
        />
        <img 
          src="/logo-black.webp"
          className="absolute w-[40rem] -right-1/5 opacity-20"
          alt="Background Logo"
        />
      </div>

      {/* Content Container */}
      <div className="h-full min-h-[60vh] flex items-center justify-center">
        <div className="grid grid-rows-1 gap-10 max-w-4xl w-full">
          
          {/* Service Insight Cards */}
          {services.map(service => (
            <div key={service.id} className="content-container bg-graybase rounded-lg p-5 shadow-lg hover:shadow-2xl transition-shadow ">
              <div className="w-full h-full flex flex-row gap-10 content-card p-5">
                <div className="flex flex-col items-center my-auto card-header text-4xl">
                  <p className="text-fit tracking-[0.08em]">{service.title[0]}</p>
                  <p className={`text-fit ${service.id === 'private' ? 'no-wrap text-2xl' : 'tracking-[0.02em]'}`}>{service.title[1]}</p>
                </div>
                <p className="text-gray-700 text-md card-content max-w-[450px]">
                  {service.desc}
                </p>
                <Link to={service.link}>
                  <button className="content-btn text-md rounded bg-[#3990d8] hover:bg-[#317bb8] text-white w-25 h-25 text-wrap">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesInsight;