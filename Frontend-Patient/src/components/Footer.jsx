import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaInstagramSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoGlobeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="container">
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About Us</Link>
              <Link to={"/departments"}>Departments</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/contact"}>Contact Us</Link>
            </ul>
          </div>
          <div>
            <h4>Odisha Branches</h4>
            <p style={{ fontSize: "16px", fontWeight: "600", marginBottom: "5px", color: "#333" }}>Bhubaneswar (Main Branch)</p>
            <span style={{ fontSize: "14px", color: "gray", display: "block", marginBottom: "10px" }}>
              Plot 12, Jayadev Vihar, Infocity Road
            </span>
            <p style={{ fontSize: "16px", fontWeight: "600", marginBottom: "5px", color: "#333" }}>Cuttack Care Center</p>
            <span style={{ fontSize: "14px", color: "gray", display: "block", marginBottom: "10px" }}>
              Ring Road, near Netaji Subhas Bridge
            </span>
            <p style={{ fontSize: "16px", fontWeight: "600", marginBottom: "5px", color: "#333" }}>Rourkela Specialty Clinic</p>
            <span style={{ fontSize: "14px", color: "gray", display: "block" }}>
              Civil Township, Sector 19
            </span>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>+91 999-999-9999</span>
            </div>
            <div>
              <MdEmail />
              <span>lifecare.odisha@gmail.com</span>
            </div>
            <div>
              <FaLocationDot/>
              <span>Odisha, India</span>
            </div>
          </div>
        </div>
        <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Life Care Hospital</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
