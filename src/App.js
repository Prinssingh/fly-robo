// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import DeliveryInformation from "./pages/DeliveryInformation";
import Header from "./component/Header";
import Footer from "./component/Footer";


function App() {
  return (
    <BrowserRouter>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/DeliveryInformation" element={<DeliveryInformation />} />
          
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
