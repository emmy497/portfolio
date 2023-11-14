import Home from "./components/Home/Home";
import "./App.css";
import Navbar from "./components/Navigation/Navbar/Navbar";
import About from "./components/About/About";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <ToastContainer/>
    </>
  );
}

export default App;
