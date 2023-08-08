import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Photos from "./components/pages/Photos";
import Nearby from "./components/pages/Nearby";
import Contact from "./components/pages/Contact";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/nearby" element={<Nearby />} /> */}
      </Routes>
      <h6>Copyright @DishaParale</h6>
    </div>
  );
}

export default App;
