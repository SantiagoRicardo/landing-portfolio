import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react"; // Asegúrate de instalar `@heroicons/react`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="relative md:mx-10">
      <nav className="sticky top-0 w-full py-3 mt-8 mb-3 md:px-8 lg:px-12">
        <div className="items-center justify-between md:flex">
          <div className="items-center">
            <h1 className="flex justify-center gap-2 text-4xl font-bold text-center text-white md:text-5xl">
              Santiago<span className="text-[#4FFFBF]"> Ricardo</span>
            </h1>
            <div className="flex items-center justify-center lg:hidden">
              <button
                className="mt-3 text-white outline-none focus:outline-none"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? (
                  <XMarkIcon className="w-8 h-8" />
                ) : (
                  <Bars2Icon className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>
          <ul
            className={`${
              navbarOpen ? "flex" : "hidden"
            } flex-col items-center gap-12 font-medium text-white list-none lg:ml-auto lg:flex lg:flex-row`}
          >
            <li>conóceme</li>
            <li>proyéctos</li>
            <li>contáctame</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
