import { Link, Route, Routes } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';

import "./App.css";
import AdminHome from "./pages/admin/AdminHome";
import EditProduct from "./pages/admin/EditProduct";
import AddProduct from "./pages/admin/AddProduct";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import HomePage from "./pages/global/HomePage";
import Cart from "./pages/global/Cart";
import ContactUs from "./pages/global/ContactUs";
import Shops from "./pages/global/Shops";
import SingleProduct from "./pages/global/SingleProduct";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import NotFound from "./pages/global/NotFound";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguageEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }

  const changeLanguageEE = () => {
    i18n.changeLanguage("ee");
    localStorage.setItem("language", "ee");
  }

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Karina's webshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
              <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
            </Nav>
            <Nav>
              <button onClick={changeLanguageEN}>Eng</button>
              <button onClick={changeLanguageEE}>Est</button>
              <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
              <Nav.Link as={Link} to="/login">{t("login")}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="contact" element={<ContactUs />}></Route>
        <Route path="shops" element={<Shops />}></Route>
        <Route path="product" element={<SingleProduct />}></Route>
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
