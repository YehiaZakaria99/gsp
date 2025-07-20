import { Headset, Mail, Phone, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Link } from "react-router";
import { useState } from "react";
export default function ContactUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }
  return (
    <>
      <div
        className={cn(
          "fixed z-[9999999] group top-1/2 left-1 -translate-y-1/2 ",
          "font-bold text-primary rounded-lg",
          "border-2 border-primary",
          "transition-all duration-300",
          "transform overflow-auto",
          isMenuOpen ? "" : "-translate-x-40"
        )}
      >
        <div
          className={cn(
            isMenuOpen ? "" : "opacity-0",
            "transition-all duration-300"
            // "transform"
          )}
        >
          <div
            className={cn(
              "p-4 border-b-2 bg-white border-primary",
              "transition-all duration-300 hover:bg-primary hover:text-white hover:border-white"
            )}
          >
            <a
              href="tel:+966 13 881 3042"
              rel="noopener noreferrer"
              className={cn(
                "contact",
                "cursor-pointer",
                "flex flex-col justify-center items-center"
              )}
            >
              <Phone />
              <span className="text-sm my-2">+966 13 881 3042</span>
            </a>
          </div>
          <div
            className={cn(
              "p-4 text-sm bg-white",
              "transition-all duration-300 hover:bg-primary hover:text-white"
            )}
          >
            <Link
              to={"contact"}
              className={cn(
                "contact",
                "cursor-pointer",
                "flex flex-col justify-center items-center"
              )}
            >
              <Mail />
              <span className="text-sm my-2">Send Message</span>
            </Link>
          </div>
        </div>
      </div>

      <button
        id="contactBtn"
        aria-label="contact"
        onClick={handleMenu}
        className={cn(
          "call bg-white w-16 h-16 cursor-pointer",
          "flex justify-center items-center",
          "border-2 border-primary rounded-full",
          "transition duration-300 hover:bg-primary hover:text-white hover:border-white",
          "transform",
          "fixed z-[9999999] group top-1/2 left-1 -translate-y-1/2",
          isMenuOpen ? "translate-x-40" : "translate-x-0"
        )}
      >
        {isMenuOpen ? <X size={30} /> : <Headset size={30} />}
      </button>
    </>
  );
}
