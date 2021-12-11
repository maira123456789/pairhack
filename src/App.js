import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import AuthContextProvider from './context/authContext'
function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
