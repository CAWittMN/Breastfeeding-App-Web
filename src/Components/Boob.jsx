import React from "react";
import "./Boob.css";

const Boob = ({ size, nipplePlacement, empty }) => {
  return (
    <div className="boob" style={size} onClick={empty}>
      <div className="nipple" style={nipplePlacement}></div>
    </div>
  );
};

export default Boob;
