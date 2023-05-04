//import PageContent from "../components/PageContent";
import PageSection from "../components/PageSection";
import { store } from "../data/games";

export default function GameShop({ props }) {
  return <PageSection sectionName={"GAMESHOP"} games={store} />;
}
