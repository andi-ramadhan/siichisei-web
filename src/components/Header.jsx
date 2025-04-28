const Header = ({ activeSection, setActiveSection }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#3c5966]">
      <div className="flex flex-row justify-between items-center mx-auto py-8 px-25">
        <h1 className="text-3xl text-gray-200">SiiChiSei Logo</h1>
        <nav className="flex flex-row gap-15 text-xl nav-link">
          <a
            href="#services"
            className={activeSection === 'services' ? 'active' : ''}
            onClick={() => setActiveSection('services')}
          >
            Services
          </a>
          <a
            href="#welcome"
            className={activeSection === 'welcome' ? 'active' : ''}
            onClick={() => setActiveSection('welcome')}
          >
            Academy
          </a>
          <a href="#">FAQs</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;