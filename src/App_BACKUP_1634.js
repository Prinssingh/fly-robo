// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import DeliveryInformation from "./pages/DeliveryInformation";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Register from "./pages/account/account/Register";
import Account from "./pages/account/account/Account";

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
<<<<<<< HEAD

=======
          <Route path ="/pages/account/account/Account" element={<Account/>} />
>>>>>>> 407db88c6f0da43e74f39dbb531b9941745c36d2
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
