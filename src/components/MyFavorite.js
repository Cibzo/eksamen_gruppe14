import { mygames } from "../data/games";
import ProdCard from "./ProdCard";
import Title from "./Title";

export default function MyFavLib({ page_name, enter, show, stil, item }) {
  return (
    <>
      <section className={stil}>
        <Title text={page_name} />
        <button>{enter}</button>
        {mygames
          .filter((Game) => Game.fav === true)
          .map((favGame) => (
            <ProdCard
              title={favGame.title}
              sjanger={favGame.genres}
              bilde={favGame.img}
              show_btn={show}
            />
          ))
          .slice(0, 2)}
      </section>
      {console.log(page_name)}
    </>
  );
}
