import React, { useState, useRef } from "react";
import "./Nav.css";

function Nav() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <header>
      <div>
        <nav className="menusanduiche"></nav>
      </div>
    </header>
  );
}

export default Nav;
