// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import ShoppingCart from "./pages/account/ShoppingCart";
import BlogList from "./pages/blog/BlogList";
<<<<<<< HEAD
// import BlogDetails from "./pages/blog/BlogDetails";
=======
import BlogDetails from "./pages/blog/BlogDetails";
import WishList from "./pages/account/account/WishList";
>>>>>>> shubhashni
import ChangePassword from "./pages/account/account/ChangePassword";
import EditAccount from "./pages/account/account/EditAccount";
import ForGetpassward from "./pages/account/account/Forgetpassward";
import WishList from "./pages/account/account/WishList";
import Address from "./pages/account/Address/Address";
import AddNewAddress from "./pages/account/Address/AddNewAddress";
import OrderHistory from "./pages/account/OrderHistory";
// import WishList from "./pages/account/account/WishList";
// import WishList from "./pages/account/account/WishList";
import ProductDetails from "./pages/ProductDetails";


function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
<<<<<<< HEAD
          <Route path="/pages/account/account/Account" element={<Account />} />
          <Route path="/pages/account/account/Logout" element={<Logout />} />
          <Route path="/pages/account/account/Login" element={<Login />} />
          <Route
            path="/pages/account/account/Register"
            element={<Register />}
          />
          <Route
            path="/pages/account/ShoppingCart"
            element={<ShoppingCart />}
          />

          
          <Route path="/BlogList" element={<BlogList />} />
        
          <Route
            path="/DeliveryInformation"
            element={<DeliveryInformation />}
          />
          <Route path="/pages/account/account/Login" element={<Login />} />

          <Route path="/pages/account/account/Account" element={<Account />} />

          <Route
            path="/pages/account/account/Register"
            element={<Register />}
          />
          <Route
            path="/pages/account/account/WishList"
            element={<WishList />}
          />

          <Route
            path="/pages/account/ShoppingCart"
            element={<ShoppingCart />}
          />

          <Route
            path="/pages/account/account/ChangePassword"
            element={<ChangePassword />}
          />

          <Route
            path="/pages/account/account/EditAccount"
            element={<EditAccount />}
          />

          <Route
            path="/pages/account/account/Forgetpassward"
            element={<ForGetpassward />}
          />

          <Route path="/pages/account/Address" element={<Address />} />

          <Route
            path="/pages/account/Address/AddNewAddress"
            element={<AddNewAddress />}
          />
          
           <Route path="/pages/account/OrderHistory" element={<OrderHistory/>}/>

          <Route path="/DeliveryInformation" element={<DeliveryInformation />} />
          <Route path="/productdetails" element={<ProductDetails/>}/>
=======
          <Route path ="/pages/account/account/Account" element={<Account/>} />
          <Route path ="/pages/account/account/Logout" element={<Logout/>} />
          <Route path ="/pages/account/account/Login" element={<Login/>} />
          <Route path ="/pages/account/account/Register" element={<Register/>} />
          <Route path="/BlogList" element={<BlogList />} />
          <Route path="/BlogDetails" element={<BlogDetails />} />
          <Route path ="/pages/account/ShoppingCart" element={<ShoppingCart/>} />
          <Route path="/DeliveryInformation" element={<DeliveryInformation />} />
          <Route path="/pages/account/account/Login" element={<Login/>} />
          <Route path="/pages/account/account/Account" element={<Account/>} />
          <Route path="/pages/account/account/Register" element={<Register/>} />
          <Route path="/pages/account/account/WishList" element={<WishList/>} />
          <Route path="/pages/account/ShoppingCart" element={<ShoppingCart/>} />
          <Route path="/pages/account/account/ChangePassword" element={<ChangePassword/>} />
          <Route path="/pages/blog/BlogDetails" element={<BlogDetails/>}/>
>>>>>>> shubhashni


        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
