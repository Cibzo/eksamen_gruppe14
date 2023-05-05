import "./App.css";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import shopLogo from "./data/logos/1x/macslogo_black.png"
import GameShop from "./pages/Gameshop";
import MyFavourites from "./pages/MyFavourites";


function App() {
  return (
    <>
      <Header logo={shopLogo}/>
      <MyFavourites/>
    </>
  );
}

export default App;
