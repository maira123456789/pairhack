import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import AuthContextProvider from './context/authContext'
import PerfumesContextProvider from "./context/perfumesContext";
function App() {
  return (
    <AuthContextProvider>
    <PerfumesContextProvider>
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
    </PerfumesContextProvider>
    </AuthContextProvider>
  );
}

export default App;
