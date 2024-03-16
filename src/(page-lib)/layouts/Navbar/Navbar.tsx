"use client";

//import { type FC, useState } from "react";

function Navbar() {
  //const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="relative mx-10">
      <nav className="sticky top-0 w-full px-8 py-3 mt-8 mb-3 lg:px-12">
        <div className="flex justify-between">
          <h1 className="text-5xl font-bold text-white">
            Santiago <span className="text-[#4FFFBF]">Ricardo</span>
          </h1>

          <ul className="flex flex-col items-center gap-12 font-medium text-white list-none lg:ml-auto lg:flex-row">
            <li>conóceme</li>
            <li>proyéctos</li>
            <li>contáctame</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
