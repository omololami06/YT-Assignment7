import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./components/About/About";
import Profile from "./components/Profile/Profile";
import Berries from "./components/Berries/Berries";
import Portfolio from "./components/Portfolio/Portfolio";
import Grids from "./components/Grid/Grids";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Profile />
      <Berries />
      <About />
      <Portfolio />
      <Grids />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
