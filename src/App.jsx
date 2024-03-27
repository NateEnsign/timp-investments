import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ApproachScreen from "./screens/ApproachScreen";
import ImpactSceen from "./screens/ImpactScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import TeamScreen from "./screens/TeamScreen";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div>
        <Header />
        
        <Routes>
          <Route path="/portfolio" element={<PortfolioScreen />} />
          <Route path="/approach" element={<ApproachScreen />} />
          <Route path="/impact" element={<ImpactSceen />} />
          <Route path="/team" element={<TeamScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
