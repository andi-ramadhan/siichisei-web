const Footer = () => {
  return (
    <footer className="min-h-[50vh] w-full mx-auto font-inter bg-[#3c5966] relative overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-between py-10">
        {/* Link Map section */}
        <div className="link-map-section flex flex-col text-gray-200 justify-center items-center my-30 mx-20">
          <h2 className="text-2xl mb-15 font-semibold text-bg-base-orange">Link Map</h2>
          <div className="link-section flex flex-row gap-10 font-medium shadow-sm-custom shadow-bg-base-orange rounded-md p-2">
            <a href="#">Services</a>
            <a href="#">Academy</a>
            <a href="#">FAQs</a>
            <a href="#">Testimonial</a>
            <a href="#">Contact</a>
          </div>
        </div>

        {/* Bottom container */}
        <div className="bottom-container flex flex-row justify-between items-center px-20 py-5 mt-auto text-gray-200">
          <p className="text-lg font-medium">SiiChiSei Text Logo</p>
          <a href="#welcome" className="absolute left-1/2 -translate-x-1/2">Back To Top</a>
          <div className="flex flex-col text-right">
            <p className="text-gray-300">&copy;2025 SiiChiSei &mdash; All rights reserved</p>
            <p className="italic font-medium tracking-wider">SiiChiSei &mdash; Your Vocal Journey Companion</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;