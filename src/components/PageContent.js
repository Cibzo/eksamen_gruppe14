import { mygames, store } from "../data/games";
import PageSection from "./PageSection";

export default function PageContent({ pageName }) {
  return (
    <>
      <main className={pageName}>
        <PageSection
          libaryName={"Gameshop"}
          sectionName={"GAMESHOP"}
          enterBtn={"Visit shop"}
          games={store}
        />
        <PageSection
          libaryName={"My Favourites"}
          sectionName={"MY FAVOURITES"}
          enterBtn={"Go to favourites"}
          games={mygames}
          show={true}
        />
        <PageSection
          libaryName={"My library"}
          sectionName={"MY GAMES-LIBARY"}
          enterBtn={"Go to library"}
          games={mygames}
          show={true}
        />
      </main>
    </>
  );
}
