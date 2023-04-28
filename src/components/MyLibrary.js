import { mygames } from "../data/games";
import ProdCard from "./ProdCard";
import Title from "./Title";

export default function MyLib ({page_name, enter, show}) {
    return (
        <>
        <section className={page_name}>
            <Title text={page_name} />
            <button>{enter}</button>
            {(mygames.map(allGame => 
            (<ProdCard key={allGame.id} title={allGame.title} sjanger={allGame.genres} bilde={allGame.img} show_btn={show}/>)))}
        </section>
        </>

    )
}