import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Gameshop from "./pages/Gameshop";
import MyGames from "./pages/MyGames";
import MyFavourites from "./pages/MyFavourites";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/GameShop" element={<Gameshop />} />
        <Route path="/MyGames" element={<MyGames />} />
        <Route path="/MyFavourites" element={<MyFavourites />} />
      </Routes>
    </>
  );
}

export default App;
