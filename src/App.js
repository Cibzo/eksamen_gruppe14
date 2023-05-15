import "./App.css";
import "./index.css";
import Header from "./components/Header";
import shopLogo from "./data/logos/1x/macslogo_black.png";
import { pages } from "./data/pages";
import Dashboard from "./pages/Dashboard";
import GameShop from "./pages/GameShop";
import MyGames from "./pages/MyGames";
import MyFavourites from "./pages/MyFavourites";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header logo={shopLogo} pgdata={pages} />
      <Routes id={150}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/GameShop" element={<GameShop />} />
        <Route path="/MyGames" element={<MyGames />} />
        <Route path="/MyFavourites" element={<MyFavourites />} />
      </Routes>
    </>
  );
}

export default App;
