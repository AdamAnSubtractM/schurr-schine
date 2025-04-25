import React, { useState, useEffect } from "react";
import { Car } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-white">
            SchurrShine
          </span>
          <Car className="text-amber mr-2" size={24} />
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["about", "services", "gallery", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-white hover:text-amber transition-colors font-medium capitalize"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-amber hover:bg-amber/90 text-navy font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Header;
