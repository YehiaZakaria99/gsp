import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { ChevronDown, ChevronUp, ChevronUpIcon, Menu, X } from "lucide-react";
import logo from "/Navbar/logo.svg";
import { cn } from "../../lib/utils";
import NavbarMobile from "./NavbarMobile";
import AboutDropdown from "./AboutDropdown";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // About Menu ###########################################
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const aboutMenuRef = useRef(null);

  // Scroll ###############################################
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "" },
    {
      name: "About",
      to: "about",
      aboutList: [
        { name: "Leadership", to: "/about/leadership" },
        { name: "Our Equipments", to: "/about/our-equipments" },
        { name: "Introduction", to: "/about/introduction" },
        { name: "Information", to: "/about/information" },
        { name: "Organizational Chart", to: "/about/organizational-chart" },
        { name: "Our Man Power", to: "/about/our-man-power" },
        { name: "Owned Machines", to: "/about/owned-machines" },
        { name: "Financial Status", to: "/about/financial-status" },
      ],
    },
    { name: "Our Solutions", to: "ourSolutions" },
    // { name: "Our Experience", to: "ourExperience" },
    { name: "Gallery", to: "gallery" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[9999999999999999999] transition-all duration-300",
          isScrolled
            ? "bg-navbar backdrop-blur-md shadow-md py-3"
            : "bg-navbar py-5 shadow-xl"
        )}
      >
        <div className="container flex items-center justify-between flex-wrap">
          {/* Logo */}
          <NavLink to="" className="flex items-center z-50 ">
            <img src={logo} alt="Logo" className="md:h-10 h-6 w-auto" />
          </NavLink>

          {/* Desktop */}
          <div className="hidden lg:flex space-x-8 text-lg">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.aboutList ? (
                  <>
                    <AboutDropdown
                      ref={aboutMenuRef}
                      state={isAboutDropdownOpen}
                      setState={setIsAboutDropdownOpen}
                      setIsMenuOpen={setIsMenuOpen}
                      item={item}
                      isMobile={false}
                    />
                  </>
                ) : (
                  <NavLink
                    aria-label={item.name}
                    to={item.to}
                    className="text-primary font-bold hover:text-hover transition-colors duration-300 flex items-center"
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Mobile */}
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden z-50 text-primary mx-auto xs:mx-0"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
        <NavbarMobile
          navItems={navItems}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isAboutDropdownOpen={isAboutDropdownOpen}
          setIsAboutDropdownOpen={setIsAboutDropdownOpen}
        />
      </nav>
    </>
  );
}
