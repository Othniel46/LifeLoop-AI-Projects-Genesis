import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AI from "./pages/AI";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/ai"
          element={<AI />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/research"
          element={<Research />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;