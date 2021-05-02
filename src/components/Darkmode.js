import React from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import Switch from "./Switch";

const Darkmode = () => {
  return (
    <div>
      <div className="darkMode">
        <FaSun className="faSize faSun" />
        <Switch rounded={true} />
        <FaMoon className="faSize faMoon" />
      </div>
    </div>
  );
};

export default Darkmode;
