import $ from "jquery";
import Popper from 'popper.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos/dist/aos";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cont from "./components/Cont";
import Footer from "./components/Footer";
import Slider from './components/Slider'
import Slider2 from "./components/Slider2";
import Card from "./components/Card";
import Caronew from "./components/Caronew";

AOS.init();



function App() {
  return (
    
    <div>
      <Navbar />
      <Header />
      <Cont />
    </div>
  );
}


export default App;
