import React, { useState } from "react";
import { Link } from "react-router-dom";
import home from "../assets/otherPics/home.png";
import meta from "../assets/otherPics/meta.png";
import Wallet from "../pages/Wallet";
import "./Navbar.css";
import meatbun from "../assets/places/meatbun.png";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal((prev) => !prev);
  }
  return (
    <div className="nav">
      <div className="Logo">
        <img src={meatbun} alt="..." className="pgIcon" />
      </div>
      <div className="page-links">
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/pts" className="links">
          Place to stay
        </Link>
        <Link to="/" className="links">
          NFTs
        </Link>
        <Link to="/" className="links">
          Community
        </Link>
        <Link className="buuton" onClick={() => setShowModal(true)}>
          Connect Wallet
        </Link>
        <Wallet show={showModal} onHide={() => setShowModal(false)} />
      </div>
    </div>
  );
}
export default Navbar;
