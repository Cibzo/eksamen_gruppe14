import "./App.css";
import RouterLink from "./RouterLink";
import Header from "./components/Header";
import shopLogo from "./data/logos/1x/macslogo_black.png"
import { pages } from "./data/pages";




function App() {
  return (
    <>
      <Header logo={shopLogo} pgdata={pages}/>
      <RouterLink/>
    </>
  );
}

export default App;
