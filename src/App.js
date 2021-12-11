import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import AuthContextProvider from "./context/authContext";
import PerfumesContextProvider from "./context/perfumesContext";
import BrandsContextProvider from "./context/brandsContext";
function App() {
  return (
    <AuthContextProvider>
      <BrandsContextProvider>
        <PerfumesContextProvider>
          <BrowserRouter>
            <Header />
            <Routing />
            <Footer />
          </BrowserRouter>
        </PerfumesContextProvider>
      </BrandsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
