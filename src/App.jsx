import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Insights from "./pages/Insights";
import People from "./pages/People";
import Products from "./pages/Products";
import Expertise from "./pages/Expertise";
import './index.css'
import Gyamfi from "./components/profiles/Gyamfi";
import Elsie from "./components/profiles/Elsie";
import Dennis from "./components/profiles/Dennis";
import ScrollToTop from "./components/ScrollToTop";




function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/expertise" element={<Expertise/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/insights" element={<Insights/>}></Route>
          <Route path="/people" element={<People/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/expertise" element={<Expertise/>}></Route>
          <Route path="/career" element={<Career/>}></Route>
          <Route path="/gyamfi" element={<Gyamfi />} />
          <Route path="/elsie" element={<Elsie />} />
          <Route path="/dennis" element={<Dennis />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
