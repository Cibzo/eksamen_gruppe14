import shopLogo from "./data/logos/1x/macslogo_black.png"
import "./App.css";
import Header from "./components/Header";
import RouterLink from "./components/RouterLink.js";
import { pages } from "./data/pages";

function App() {
  return (
    <>
    <Header logo={shopLogo} pgdata={pages} />
    <RouterLink/>
    </>
  );
}

export default App;
