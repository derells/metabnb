import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//pages
import Home from "./pages/Home";
import Pts from "./pages/Pts";
import Wallet from "./pages/Wallet";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/metabnb" element={<Home />} render={<Home />} />
            <Route path="/pts" element={<Pts />} render={<Pts />} />
            <Route path="/wallet" element={<Wallet />} render={<Wallet />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
