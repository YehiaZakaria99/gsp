import { useEffect } from "react";
import { cn } from "../../lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { NavLink } from "react-router";

export default function AboutDropdown({
  ref,
  state,
  setState,
  setIsMenuOpen,
  item,
  isMobile,
}) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setState(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  function handleClick() {
    setState(false);
    setIsMenuOpen(false);
  }

  return (
    <>
      <div ref={ref} className={cn("relative")}>
        <button
          onClick={() => setState((prev) => !prev)}
          className={cn(
            "text-primary font-bold my-2 lg:my-0",
            "inline-flex items-center",
            "hover:text-hover transition-colors duration-300"
          )}
        >
          {item.name}
          {state ? (
            <ChevronUp size={20} className="ml-1" />
          ) : (
            <ChevronDown size={20} className="ml-1" />
          )}
        </button>

        {/* Dropdown List */}
        {
          <div
            className={cn(
              isMobile
                ? ""
                : "absolute top-10 -left-1/2 bg-white z-50 min-w-[200px] ",
              "transition-all duration-300 shadow-2xl rounded-lg py-2",
              state
                ? "max-h-[500px] opacity-100 pointer-events-auto"
                : "max-h-0 opacity-0 py-0 pointer-events-none",
              "transition-all duration-300"
            )}
          >
            {item.aboutList.map((subItem, subIndex) => (
              <NavLink
                aria-label={subItem.name}
                key={subIndex}
                to={subItem.to}
                onClick={() => {
                  handleClick();
                }}
                className={cn(
                  isMobile ? "text-sm" : "text-md ",
                  "aboutLinksStyle "
                )}
              >
                {subItem.name}
              </NavLink>
            ))}
          </div>
        }
      </div>
    </>
  );
}
