import React from "react";
import "./About.css";
import guys from "../assets/places/guys.png";

function About() {
  return (
    <div className="moop">
      <div className="wordos">
        <h1 className="head">Metabnb NFTs</h1>
        <p className="parpar">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
      </div>
      <div className="linkubox">
        <a href="https://youtu.be/dQw4w9WgXcQ" className="linku">
          Learn more
        </a>
      </div>
      <div className="img-sec">
        <img src={guys} alt="..." className="boys" />
      </div>
    </div>
  );
}

export default About;
