import { Route, Routes } from "react-router-dom";

import "./App.css";
import AdminHome from "./pages/admin/AdminHome";
import EditProduct from "./pages/admin/EditProduct";
import AddProduct from "./pages/admin/AddProduct";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import HomePage from "./pages/global/HomePage";
import Cart from "./pages/global/Cart";
import { ContactUs } from "./pages/global/ContactUs";
import Shops from "./pages/global/Shops";
import SingleProduct from "./pages/global/SingleProduct";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import NotFound from "./pages/global/NotFound";
import NavigationBar from "./components/NavigationBar";

function App() {


  return (
    <div className="App">
      <NavigationBar/>

      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="contact" element={<ContactUs />}></Route>
        <Route path="shops" element={<Shops />}></Route>
        <Route path="product/:name" element={<SingleProduct />}></Route>
        <Route path="admin" element={<AdminHome />}></Route>
        <Route path="admin/add-product" element={<AddProduct />}></Route>
        <Route path="admin/edit-product/:productId" element={<EditProduct />}></Route>
        <Route
          path="admin/maintain-categories"
          element={<MaintainCategories />}
        ></Route>
        <Route
          path="admin/maintain-products"
          element={<MaintainProducts />}
        ></Route>
        <Route path="admin/maintain-shops" element={<MaintainShops />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
