import "./App.css";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router";
import NavProduct from "./NavProduct";
import CategoryPage from "./categoryPage";
import DetailPage from "./detailPage";
import Header from "./components/header";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import Products from "./api";
import ProductsSection from "./components/productsSection";
import { Provider } from "react-redux";
import Store from "./components/redux/store";
import Cart from "./cart";
function App() {
  const [cartId, setCartId] = useState("");
  console.log("products id", cartId);

  const filterCart = Products.products.filter((items) => items.id === cartId);

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<ProductsSection />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/detailPage/:id" element={<DetailPage />} />
          <Route path="/products/detailPage/:id" element={<DetailPage />} />
          <Route path="/category/:categoryName/detailPage/:id" element={<DetailPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
