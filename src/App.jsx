import { useState } from "react";

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Works></Works>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
