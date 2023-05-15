import "./index.css";
import Dashboard from "./pages/Dashboard";
import GameShop from "./pages/GameShop";
import MyGames from "./pages/MyGames";
import MyFavourites from "./pages/MyFavourites";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <>
      <Routes id={150}>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/GameShop" element={<GameShop />} />
          <Route path="/MyGames" element={<MyGames />} />
          <Route path="/MyFavourites" element={<MyFavourites />} />
          <Route path="/:gameId" element={<GamePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

//kilder react router dom: https://reactrouter.com/en/main/components/outlet
