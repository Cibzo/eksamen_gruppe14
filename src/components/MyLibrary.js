import { mygames } from "../data/games";
import ProdCard from "./ProdCard";
import Title from "./Title";

export default function MyLib({ page_name, enter, show }) {
  return (
    <>
      <section className={page_name}>
        <Title text={page_name} />
        <button>{enter}</button>
        {/*(mygames.filter(Game => Game.fav === true).map(nonefavGame => 
            (<ProdCard title={nonefavGame.title} sjanger={nonefavGame.genres} bilde={nonefavGame.img} show_btn={show}/>)))*/}
        {mygames
          .map((mygames) => (
            <ProdCard
              title={mygames.title}
              sjanger={mygames.genres}
              bilde={mygames.img}
              lenke={mygames.link}
              show_btn={show}
            />
          ))
          .slice(0, 5)}
      </section>
    </>
  );
}
