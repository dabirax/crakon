import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="fixed top-0 w-full px-5 py-5 box-border bg-[#effaf0] text-black  shadow z-50">
        <div className="flex mx-auto max-w-5xl items-center justify-between">
          <p className=" font-bold text-2xl tracking-widest">
            <Link
              to={`/`}
              className="flex gap-1 fromTop"
            >
              Crakon{" "}
              <span>
                <img src={logo} alt="" className="w-10 rounded-lg" />
              </span>
            </Link>
          </p>
          <div className="hidden md:flex justify-center items-center gap-4 text-[#333]">
            <p className=" text-xl capitalize font-semibold text-[#a84f2d] hover:scale-105 transition-all duration-100 ease-linear">
              <Link to="/login">login</Link>
            </p>
            <p className=" text-xl capitalize font-semibold text-green-400 hover:scale-105 transition-all duration-100 ease-linear">
              <Link to="/signup">Signup</Link>
            </p>
          </div>
          <div className="md:hidden block">
            <button onClick={toggleMenu} className="text-2xl">
              {menuOpen ? "X" : "="}
            </button>
          </div>
        </div>
      </div>
      <div
        className={` ${
          menuOpen ? "translate-x-0 w-1/4" : "-translate-x-20"
        } transition-transform duration-500 ease-out block md:hidden fixed py-10 px-2 left-0 top-auto h-full bg-[#effaf0] z-50`}
      >
        <p className=" text-xl capitalize font-semibold text-yellow-400 hover:scale-105 transition-all duration-100 ease-linear">
          <Link to="/login" onClick={toggleMenu}>
            login
          </Link>
        </p>
        <p className=" text-xl capitalize font-semibold mt-6 text-green-400 hover:scale-105 transition-all duration-100 ease-linear">
          <Link to="/signup" onClick={toggleMenu}>
            Signup
          </Link>
        </p>
      </div>
    </>
  );
};

export default Navbar;
