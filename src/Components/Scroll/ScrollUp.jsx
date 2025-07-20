import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";
import { cn } from "../../lib/utils";

export default function ScrollUp({ to }) {
  return (
    <>
      {/* Scroll Up */}
      <div className="fixed right-10 bottom-8 z-[9999999] transition-all duration-300">
        <Link to={to} smooth={true} duration={0} offset={-50}>
          <div
            className={cn(
              "border-2 border-primary cursor-pointer rounded-full flex items-start justify-center p-1 mx-auto bg-white text-primary",
              "transition-all duration-300 hover:bg-primary hover:text-white hover:border-white"
            )}
          >
            <ArrowUp className=" font-extrabold" size={25} />
          </div>
        </Link>
      </div>
    </>
  );
}
