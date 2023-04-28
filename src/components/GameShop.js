import { store } from "../data/games";
import ProdCard from "./ProdCard";
import Title from "./Title";

export default function GameShop ({page_name, enter, show}) {
    return (
        <>
        <section className={page_name}>
            <Title text={page_name} />
            <button>{enter}</button>
            {store.map(sellGame => 
            (<ProdCard key={sellGame.id} title={sellGame.title} sjanger={sellGame.genres} bilde={sellGame.img} lenke={sellGame.link} show_btn={show}/>))}
        </section>
        </>

    )
}