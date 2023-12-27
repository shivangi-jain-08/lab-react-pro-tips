import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/"><h1>Kalvium</h1></Link>
      </div>
      <div>
        <Link to="/contacts">Contacts</Link>
        <Link to="/registration">Registration Form</Link>
      </div>
    </nav>
  );
}

export default Navbar;
