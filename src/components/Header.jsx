import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-[9999] bg-gray-blue">
      <div className="flex flex-row justify-between items-center mx-auto py-5 px-25">
        <Link to="/" className="text-3xl text-gray-200">
          SiiChiSei Logo
        </Link>
        <nav className="flex flex-row gap-15 text-xl">
          <NavLink to="/services"
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
          >
            Services
          </NavLink>
          {/* <div className="dropdown relative inline-block"> */}
            <NavLink to="/academy"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Academy
            </NavLink>
            {/* <div className="dropdown-content absolute bg-gray-blue text-white min-w-40">
              <NavLink to="/academy#1"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Academy 1
              </NavLink>
              <NavLink to="/academy"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Academy 2
              </NavLink>
              <NavLink to="/academy"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Academy 3
              </NavLink>
            </div>
          </div> */}
          <NavLink to="/faqs"
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
          >
            FAQs
          </NavLink>
          <NavLink to="/testimonials"
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
          >
            Testimonials
          </NavLink>
          <NavLink to="/contact"
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
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