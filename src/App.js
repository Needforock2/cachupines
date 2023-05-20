import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import React from "react";
import { UserContextProvider } from "./context/UserContextProvider";
import { CartContextProvider } from "./context/CartContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView/CartView";
import { Checkout } from "./components/Checkout/Checkout";

//const isDarkMode = true

function App() {
  return (
    <React.StrictMode>
      <UserContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting={"ARTICULOS"} />}
              />
              <Route
                path="/products"
                element={<ItemListContainer greeting={"ARTICULOS"} />}
              />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route
                path="/products/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<CartView />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route
                path="/*"
                element={<ItemListContainer greeting={"ARTICULOS"} />}
              />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </UserContextProvider>
    </React.StrictMode>
  );
}

export default App;
