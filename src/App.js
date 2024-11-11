// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import DeliveryInformation from "./pages/DeliveryInformation";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Login from "./pages/account/account/Login";
import Account from "./pages/account/account/Account";
import Logout from "./pages/account/account/Logout";
import Register from "./pages/account/account/Register";
// import ShoppingCart from "./pages/account/ShoppingCart"
import BlogList from "./pages/blog/BlogList";
// import BlogDetails from "./pages/blog/BlogDetails";


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
          <Route path ="/pages/account/account/Account" element={<Account/>} />
          <Route path ="/pages/account/account/Logout" element={<Logout/>} />
          <Route path ="/pages/account/account/Login" element={<Login/>} />
          <Route path ="/pages/account/account/Register" element={<Register/>} />
          {/* <Route path ="/pages/account/ShoppingCart" element={<ShoppingCart/>} /> */}
          <Route path="/BlogList" element={<BlogList />} />

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
