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


function App() {
  return (
    <div>
      <BrowserRouter>
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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
