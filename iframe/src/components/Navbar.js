import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const listStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <nav>
      <div className="links">
        <ul>
        <li>
            <Link to="/" style={listStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/delivery" style={listStyle}>
              Delivery
            </Link>
          </li>
          <li>
            <Link to="/accept" style={listStyle}>
              Accetp
            </Link>
          </li>
          <li>
            <Link to="/reject" style={listStyle}>
              Reject
            </Link>
          </li>
          <li>
            <Link to="/timeout" style={listStyle}>
              Timeout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
