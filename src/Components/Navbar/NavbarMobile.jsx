import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { NavLink } from "react-router";
import { ChevronDown, ChevronUp } from "lucide-react";
import AboutDropdown from "./AboutDropdown";

export default function NavbarMobile({ navItems, isMenuOpen, setIsMenuOpen }) {
  const [isAboutDropdownOpenMobile, setIsAboutDropdownOpenMobile] =
    useState(false);

  const aboutMenuMobileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        aboutMenuMobileRef.current &&
        !aboutMenuMobileRef.current.contains(event.target)
      ) {
        setIsAboutDropdownOpenMobile(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden ease-in-out  text-white px-5 rounded-md",
          isMenuOpen
            ? "max-h-[1000px] opacity-100 py-4 pointer-events-auto"
            : "max-h-0 opacity-0 py-0 pointer-events-none",
          "transition-all duration-300"
        )}
      >
        <div className=" text-center text-lg font-bold text-primary">
          {navItems.map((item, index) => (
            <div className="relative" key={index}>
              {item.aboutList ? (
                <>
                  <AboutDropdown
                    ref={aboutMenuMobileRef}
                    state={isAboutDropdownOpenMobile}
                    setState={setIsAboutDropdownOpenMobile}
                    setIsMenuOpen={setIsMenuOpen}
                    item={item}
                    isMobile={true}
                  />
                </>
              ) : (
                <NavLink
                  aria-label={item.name}
                  key={index}
                  to={item.to}
                  className="hover:text-hover transition duration-300 py-4 inline-flex"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
