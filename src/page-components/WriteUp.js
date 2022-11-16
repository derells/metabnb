import React from "react";
import "../page-components/WriteUp.css";
import Foot from "../page-components/Foot";
import nft1 from "../assets/otherPics/nft1.png";
import nft2 from "../assets/otherPics/nft2.png";
import nft3 from "../assets/otherPics/nft3.png";
import nft4 from "../assets/otherPics/nft4.png";

function WriteUp() {
  return (
    <div className="body">
      <div className="poop">
        <div className="textspace">
          <div>
            <h1 className="rent">
              Rent a <span className="wine">Place</span> away from{" "}
              <span className="wine">Home</span> in the{" "}
              <span className="wine">Metaverse</span>
            </h1>
          </div>
          <div />
          <div>
            <p className="paragraph">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
          </div>
          <div className="searchbar">
            <input
              className="userint"
              type="text"
              placeholder="Search for location"
            ></input>
            <button className="butt">Search</button>
          </div>
        </div>
        <div className="picSec">
          <div className="left">
            <img className="topl" src={nft2} alt="..."></img>
            <img className="btml" src={nft4} alt="..."></img>
          </div>
          <div className="right">
            <img className="topr" src={nft1} alt="..."></img>
            <img className="btmr" src={nft3} alt="..."></img>
          </div>
        </div>
        <div />
      </div>
      <Foot />
    </div>
  );
}
export default WriteUp;
