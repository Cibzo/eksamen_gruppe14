import { store } from "../data/games";
import ProdCard from "./ProdCard";
import Title from "./Title";

export default function Page ({page_name, enter, show}) {
    return (
        <>
        <section>
        <Title text={page_name} />
        <button>{enter}</button>
        {(store).map(store => (<ProdCard title={store.title} sjanger={store.genres} bilde={store.img} show_btn={show}/>))}       
        </section>
        </>

    )
}