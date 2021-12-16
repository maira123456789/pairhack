import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import AuthContextProvider from "./context/authContext";
import PerfumesContextProvider from "./context/perfumesContext";
import BrandsContextProvider from "./context/brandsContext";
import CartContextProvider from "./context/cartContext";
import "antd/dist/antd.css";
function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <BrandsContextProvider>
          <PerfumesContextProvider>
            <BrowserRouter>
              <Header />
              <Routing />
              <Footer />
            </BrowserRouter>
          </PerfumesContextProvider>
        </BrandsContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
