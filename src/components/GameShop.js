import { store } from "../data/games";
import ProdCard from "./ProdCard";
import Title from "./Title";

export default function GameShop ({page_name, enter, show}) {
    return (
        <>
        <section className={page_name}>
            <Title text={page_name} />
            <button>{enter}</button>
            {store.map(store => 
            (<ProdCard title={store.title} sjanger={store.genres} bilde={store.img} lenke={store.link} show_btn={show}/>))}
        </section>
        </>

    )
}