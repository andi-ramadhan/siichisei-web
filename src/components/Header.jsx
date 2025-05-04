import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-blue">
      <div className="flex flex-row justify-between items-center mx-auto py-5 px-25">
        <Link to="/" className="text-3xl text-gray-200">
          SiiChiSei Logo
        </Link>
        <nav className="flex flex-row gap-15 text-xl nav-link">
          <NavLink to="/services"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Services
          </NavLink>
          <NavLink to="/academy"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Academy
          </NavLink>
          <NavLink to="/faqs"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            FAQs
          </NavLink>
          <NavLink to="/testimonials"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Testimonials
          </NavLink>
          <NavLink to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header;