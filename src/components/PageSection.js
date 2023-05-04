import Btn from "../components/Btn";
import { store } from "../data/games";
import { randIndex } from "./Functions";
import ProductCard from "./ProductCard";
import Title from "./Title";

export default function PageSection({secName}) {
    return (
            <>
            <section className={secName}>
                <Title text={"Gameshop"}/>
                <Btn name={"Visit Gameshop"}/>
                {randIndex.map(randIndex => (
                <ul key={store[randIndex].id}>
                <ProductCard 
                    title={store[randIndex].title}
                    generes={store[randIndex].genres}
                    bilde={store[randIndex].img}
                />
                <Btn atr={store[randIndex].id} link={store[randIndex].link} name={"Buy"} />
                </ul>
                ))}
            </section>
            </>
    )
}