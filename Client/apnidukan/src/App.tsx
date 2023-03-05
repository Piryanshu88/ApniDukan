import React from "react";

import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { AllRoutes } from "./Pages/AllRoutes";
import { Footer } from "./Pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
