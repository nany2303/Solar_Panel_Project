import './App.css';
import Blog from "./pages/Blog/Blog";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
// import Index from "./pages/home";
import Index from "./pages/home/index";
import About from "./pages/About/About";
import Product from "./pages/Product/Product"
import Contact from "./pages/Contact/Contact";
import ProductDetails from "./pages/Product/Product-details";
import SolarPanel1 from "./pages/Solarpanel/SolarPanel-1";
import LoginSignup from "./pages/LoginSignup/LoginSignup";

function App() {

  return (
      <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/home" element={<Home />} />
          <Route path="/index" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="services.html" element={<SolarPanel1 />} />
      </Routes>
  )
}

export default App;
