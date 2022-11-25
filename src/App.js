import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./modules/home/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Index />} index></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
