import "./Wallet.css";
import React from "react";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import wollet from "../assets/places/wollet.png";
import fox from "../assets/places/fox.png";
import lil from "../assets/places/lilbutton.png";

function Wallet(props) {
  return (
    // <div className="body">
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      font-family="Red Rose contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Connect Wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="oomp">
        <div className="wrords">
          <p>Choose your preferred wallet</p>
        </div>
      </Modal.Body>

      <Modal.Footer className="linki-box">
        <div className="linkks">
          <div className="tp-link">
            <img src={fox} alt="..." className="fox" />
            <a href="https://youtu.be/dQw4w9WgXcQ" className="loink1">
              Metamask
            </a>
            <a className="arrow1">></a>
          </div>
          <div className="bt-link">
            <img src={wollet} alt="..." className="woll" />
            <a href="https://youtu.be/dQw4w9WgXcQ" className="loink2">
              WalletConnect
            </a>
            <a className="arrow2">></a>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
    // </div>
  );
}
export default Wallet;
