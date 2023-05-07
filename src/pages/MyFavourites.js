//import PageContent from "../components/PageContent";
import PageSection from "../components/PageSection";
import { mygames } from "../data/games";

export default function Header({ props }) {
  return (
    <PageSection sectionName={"MY FAVOURITES"} games={mygames} show={true} />
  );
}
