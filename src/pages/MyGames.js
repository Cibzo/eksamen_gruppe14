//import PageContent from "../components/PageContent";
import PageSection from "../components/PageSection";
import { mygames } from "../data/games";

export default function MyGames({ props }) {
  return (
    <PageSection sectionName={"MY GAMES-LIBARY"} games={mygames} show={true} />
  );
}
