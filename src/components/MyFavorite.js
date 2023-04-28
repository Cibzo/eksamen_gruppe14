import { mygames } from "../data/games";
import ProdCard from "./ProdCard";
import Title from "./Title";

export default function MyFavLib ({page_name, enter, show}) {
    return (
        <>
        <section className={page_name}>
            <Title text={page_name} />
            <button>{enter}</button>
            { 
        (mygames.filter(Game => Game.fav === true).map(favGame => 
        (<ProdCard key={favGame.id} title={favGame.title} sjanger={favGame.genres} bilde={favGame.img} show_btn={show}/>)))}
        </section>
        </>

    )
}