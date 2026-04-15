import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/transparent logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 bg-bg z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 -mb-4">
        {/* LOGO */}
        <div>
          <img src={logo} alt="EduNova Logo" width={200} height={150} />
        </div>

        {/* BUTTONS */}
        <div className="lg:flex md:flex gap-3 hidden ">
          <button
            className="border border-primary text-primary p-2 rounded-md text-base font-medium hover:bg-primary hover:text-white transition w-30 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="bg-primary text-white p-2 rounded-md text-base font-medium hover:opacity-90 transition w-30 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>

        <div className="lg:hidden md:hidden">
          {openNav ? (
            <button onClick={() => setOpenNav(false)}>
              <X />
            </button>
          ) : (
            <button onClick={() => setOpenNav(true)}>
              <Menu />
            </button>
          )}
        </div>
      </div>
      {openNav && (
        <div className="flex flex-col gap-3 px-6 pb-4 md:hidden lg:hidden">
          <button
            className="border border-primary text-primary p-4 rounded-md text-sm font-medium hover:bg-primary hover:text-white transition cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="bg-primary text-white p-4 rounded-md text-sm font-medium hover:opacity-90 transition cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
