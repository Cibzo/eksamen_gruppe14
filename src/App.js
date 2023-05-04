import "./App.css";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import shopLogo from "./data/logos/1x/macslogo_black.png"


function App() {
  return (
    <>
      <Header logo={shopLogo}/>
      <PageContent title={"hei"}/>
    </>
  );
}

export default App;
