import React, { Component } from "react";
import Footter from "../constants/Footter";
import Navbar from "../constants/Navbar";
import WriteUp from "../page-components/WriteUp";
import About from "./About";
import Places from "./Places";
import PlacesHeader from "./PlacesHeader";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="body">
          <div className="top">
            <WriteUp />
          </div>
        </div>
        <PlacesHeader />
        <div />
        <Places />
        <div />
        <About />
        <div />
        <Footter />
      </div>
    );
  }
}
export default Home;
