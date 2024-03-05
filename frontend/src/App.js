import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Item from "./pages/Item";
import Sales from "./pages/Sales";
import Dashboard from "./pages/Dashboard";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Item />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
