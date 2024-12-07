import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import Menu_icon from "../../assets/menu-icon.png";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className={`container dark-nav ${sticky ? "sticky" : ""}`}>
      <img src={logo} alt="logo" className="logo" />

      {/* Mobile Menu Icon */}
      <img
        src={Menu_icon}
        alt="menu icon"
        className="Menu_icon"
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              smooth={true}
              offset={-260}
              duration={500}
              onClick={closeSidebar}
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={closeSidebar}
            >
              AboutUS
            </Link>
          </li>
          <li>
            <Link
              to="campus"
              smooth={true}
              offset={-260}
              duration={500}
              onClick={closeSidebar}
            >
              Campus
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              offset={-260}
              duration={500}
              onClick={closeSidebar}
            >
              Testimonials
            </Link>
          </li>
          <li className="btn">
            <Link
              to="contact"
              smooth={true}
              offset={-260}
              duration={500}
              onClick={closeSidebar}
            >
              ContactUs
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Navigation */}
      <ul className="desktop-nav">
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            AboutUS
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li id="last">
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            ContactUs
          </Link>
        </li>
      </ul>
    </nav>
  );
};
