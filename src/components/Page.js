import { mygames, store } from "../data/games";
import ProdCard from "./ProdCard";
import Title from "./Title";

export default function Page({ page_name, enter, show }) {
  return (
    <>
      <section className={page_name}>
        <Title text={page_name} />
        <button>{enter}</button>
        {(store).map((sellGame) => (page_name === "GAMESHOP") ? 
        (<ProdCard key={sellGame.id} title={sellGame.title} sjanger={sellGame.genres} bilde={sellGame.img} lenke={sellGame.link} show_btn={show}/>)
        : null)}

        {(page_name === "MY FAVOURITES" ? 
        (mygames.filter(Game => Game.fav === true).map(favGame => 
        (<ProdCard key={favGame.id} title={favGame.title} sjanger={favGame.genres} bilde={favGame.img} show_btn={show}/>)))
        : null)}

        {(page_name === "MY GAMES-LIBRARY" ? 
        (mygames.map(allGame => 
        (<ProdCard key={allGame.id} title={allGame.title} sjanger={allGame.genres} bilde={allGame.img} show_btn={show}/>)))
        : null)} 
        </section>
        </>

    )
}
