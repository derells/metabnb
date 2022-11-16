import React from "react";
import "./Footer.css";
import logo from "../assets/places/metabun.png";
import fb from "../assets/places/fblogo.png";
import ig from "../assets/places/iglogo.png";
import tw from "../assets/places/twlogo.png";

function Footter() {
  return (
    <div className="footy">
      <div className="icon-container">
        <img src={logo} className="icn" />
        <div className="icn-c2">
          <img src={fb} className="fb" />
          <img src={ig} className="ig" />
          <img src={tw} className="tw" />
        </div>
        <p className="copy">© 2022 Metabnb</p>
      </div>
      <div className="link1-container">
        <a className="boss">Community</a>
        <a className="child child1">NFT</a>
        <a className="child">Tokens</a>
        <a className="child">Landlord</a>
        <a className="child">Discord</a>
      </div>
      <div className="link2-container">
        <a className="boss">Places</a>
        <a className="child child1">Castle</a>
        <a className="child">Farms</a>
        <a className="child">Beach</a>
        <a className="child">Learn more</a>
      </div>
      <div className="link3-container">
        <a className="boss">About us</a>
        <a className="child child1">Road map</a>
        <a className="child">Creators</a>
        <a className="child">Career</a>
        <a className="child">Contact</a>
      </div>
    </div>
  );
}
export default Footter;
