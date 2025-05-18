import { NavLink, Link } from "react-router-dom";
import socialLinks from "../utils/footerSocialLinks";
import navlLinks from "../utils/footerNavLinks";

const Footer = () => {

  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <footer className="min-h-[35vh] w-full font-inter flex flex-col justify-between py-10 px-40 bg-gray-blue">
      <div className="z-10 h-full flex flex-row justify-between gap-10 my-8">
       
        {/* first container */}
        <div className="flex flex-col text-gray-blue grow-2 gap-1">
          <h2 className="text-3xl font-semibold text-word-white-orange">SiiChiSei Text Logo</h2>
          <p className="font-inter italic tracking-wider text-lg text-word-white-orange/70">Your Vocal Journey Companion</p>
        </div>

        {/* middle container */}
        <div className="footer-links flex flex-row gap-10 tracking-wide justify-around grow-2 text-md">
          {navlLinks.map((nav, index) =>
            nav.children ? (
              <nav key={index}>
                <ul className="flex flex-col gap-2">
                  <NavLink to={nav.to} className="orange-footer-link">{nav.label}</NavLink>
                  {nav.children.map((child, cindex) => (
                    <li key={cindex}><NavLink to={child.to}>{child.label}</NavLink></li>
                  ))}
                </ul>
              </nav>
            ) : (
              <NavLink
                key={index}
                to={nav.to}
                className={nav.className}
                onClick={nav.onClick ? (e) => nav.onClick(e, toTop) : undefined}
              >
                {nav.label}
              </NavLink>
            )
          )}
        </div>
      </div>

      {/* bottom container */}
      <div className="text-gray-400 flex flex-col justify-center items-center border-t-1">
        <div className="social-media-container flex gap-3 py-20">
          {socialLinks.map((soc, idx) => (
            <div className="social-media-icon" key={idx}>
              <a href={soc.href} target="_blank" rel="noopener noreferrer" aria-label={soc.label}>
                {soc.svg}
              </a>
            </div>
          ))}
        </div>
        <p>Copyright &copy; 2025 &mdash; SiiChiSei Vocal Course. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;