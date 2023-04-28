import { mygames, store } from "../data/games";
import ProdCard from "./ProdCard";
import Title from "./Title";

export default function Page ({page_name, enter, show}) {
    return (
        <>
        <section className={page_name}>
        <Title text={page_name} />
        <button>{enter}</button>
        {(store).map((store) => (page_name === "GAMESHOP") ? 
        (<ProdCard title={store.title} sjanger={store.genres} bilde={store.img} lenke={store.link} show_btn={show}/>)
        : null)}

        {(page_name === "MY FAVOURITES" ? 
        (mygames.filter(Game => Game.fav === true).map(favGame => 
        (<ProdCard title={favGame.title} sjanger={favGame.genres} bilde={favGame.img} show_btn={show}/>)))
        : null)}

        {(page_name === "MY GAMES-LIBRARY" ? 
        (mygames.filter(Game => Game.fav === true).map(nonefavGame => 
        (<ProdCard title={nonefavGame.title} sjanger={nonefavGame.genres} bilde={nonefavGame.img} show_btn={show}/>)))
        : null)} 
        </section>
        </>

    )
}