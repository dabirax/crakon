import { Link } from "react-router-dom";
import crakonLogo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Find an Artisan", to: "/find-artisan" },
    { label: "Payments", to: "/payments" },
    { label: "Sign In", to: "/signin" },
    { label: "Register", to: "/register" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4">
      <Link to="/" className="flex items-center gap-1">
        <img src={crakonLogo} alt="Crakon" className="w-18" />
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="text-primary-foreground/90 hover:text-secondary font-medium text-sm transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-primary p-6 flex flex-col gap-4 md:hidden shadow-lg">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-primary-foreground/90 hover:text-secondary font-medium text-sm transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
