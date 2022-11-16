import React from "react";
import "../page-components/Foot.css";
import img from "../assets/otherPics/mbtokenf.png";
import img2 from "../assets/otherPics/metamaks.png";
import img3 from "../assets/otherPics/opensesa.png";

function Foot() {
  return (
    <div className="foot">
      <div className="logo-container1">
        <img className="imgg" src={img}></img>
      </div>
      <div className="logo-container2">
        <img className="imgg" src={img2}></img>
      </div>
      <div className="logo-container3">
        <img className="imgg" src={img3}></img>
      </div>
    </div>
  );
}
export default Foot;
