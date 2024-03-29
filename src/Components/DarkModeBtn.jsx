import React from "react";
import "./DarkModeBtn.css";

const DarkModeBtn = ({ setDarkMode }) => {
  return (
    <button className="dark-mode-btn" onClick={setDarkMode}>
      Dark Mode
    </button>
  );
};

export default DarkModeBtn;
