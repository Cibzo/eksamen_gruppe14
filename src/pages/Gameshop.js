import PageSection from "../components/PageSection";
import { store } from "../data/games";

export default function GameShop({ props }) {
  return (
    <>
      <PageSection
        libaryName={"Gameshop"}
        sectionName={"GAMESHOP"}
        enterBtn={"Visit shop"}
        games={store}
      />
    </>
  );
}
