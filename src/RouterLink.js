import Dashboard from "./pages/Dashboard";
import GameShop from "./pages/GameShop";
import MyGames from "./pages/MyGames";
import MyFavourites from "./pages/MyFavourites";
import { Route, Routes } from "react-router-dom";
import ExternalLink from "./components/ExternalLink";

export default function RouterLink() {
    return (
        <Routes id={150} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/GameShop" element={<GameShop />} />
          <Route path="/MyGames" element={<MyGames />} />
          <Route path="/MyFavourites" element={<MyFavourites />} />
          <Route path="/extern-lenke" element={<ExternalLink/>} />
        </Routes>
    );
  }