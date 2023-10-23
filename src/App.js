import Home from "./components/Home/Home";
import "./App.css";
import Navbar from "./components/Navigation/Navbar/Navbar";
import About from "./components/About/About";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar/>
      <Home />
      <About />
      <Projects />
    </>
  );
}

export default App;
