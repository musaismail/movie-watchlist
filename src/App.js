import * as React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Watchlist from "./Watchlist";
import Watched from "./Watched";
import Add from "./Add";
import "./lib/font-awesome/css/all.min.css";
import Header from "./Header";
import { GlobalProvider } from "./GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Watchlist />} />
        <Route path="/add" element={<Add />} />
        <Route path="/watched" element={<Watched />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
