import React from "react";
import "./ResetBoobsBtn.css";

const ResetBoobsBtn = ({ reset }) => {
  return (
    <button className="reset-boobs-btn" onClick={() => reset()}>
      Reset Boobs
    </button>
  );
};

export default ResetBoobsBtn;
