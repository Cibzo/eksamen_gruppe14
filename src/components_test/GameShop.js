import { store } from "../data/games";
import Btn from "./Btn";
import ProdCard from "./ProdCard";
import Title from "./Title";

//console.log("randIndex: " + randIndex + " Lengde på store er: " + store.length)

 function GameShop ({page_name}) {
    let randIndex = []
    while (randIndex.length < store.length) {
        let index = Math.floor(Math.random()*store.length)
        if (!randIndex.includes(index)) {
            randIndex.push(index)
        }
    }
    return (
        <>
        <section className={page_name}>
            <Title text={"Gameshop"}/>
            <Btn name={"Visit Gameshop"}/>
                {randIndex.map(randIndex => (
                <ul key={store[randIndex].id}>
                <ProdCard 
                    title={store[randIndex].title}
                    sjanger={store[randIndex].genres}
                    pic={store[randIndex].img}
                />
                <Btn atr={store[randIndex].id} link={store[randIndex].link} name={"Buy"} />
                </ul>
                ))}
        </section>
        </>

    )


}
