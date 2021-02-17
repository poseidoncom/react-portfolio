import $ from "jquery";
import Popper from 'popper.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos/dist/aos";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cont from "./components/Cont";
import Footer from "./components/Footer"; 

AOS.init();



function App() {
  return (
    
    <div className='container'>
      <Navbar />
      <Header />
      <Cont />
      <Footer />
    </div>
  );
}


export default App;
