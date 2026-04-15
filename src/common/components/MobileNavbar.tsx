import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/transparent logo.png";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-bg border-b border-borderLight">
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* LOGO */}
        <img src={logo} alt="EduNova" className="h-10" />

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex gap-3">
          <button className="border border-primary text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-white transition">
            Login
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition">
            Register
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-card dark:bg-card-dark px-4 py-4 space-y-4 border-t border-borderLight">
          <button className="w-full border border-primary text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-white transition">
            Login
          </button>

          <button className="w-full bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition">
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
