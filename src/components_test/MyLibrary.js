import { mygames } from "../data/games";
import Btn from "./Btn";
import ProdCard from "./ProdCard";
import Title from "./Title";
function MyLib ({page_name, enter, show, item}) {
    //const randomIndex = Math.floor(Math.random(0) * mygames)
    //console.log(randomIndex)
    return (
        <>
        <section className={page_name}>
            <Title text={page_name} />
            <Btn id={enter} link={""} name={page_name} />
            {(mygames.map(allGame => 
            (<ProdCard key={allGame.id} title={allGame.title} sjanger={allGame.genres} pic={allGame.img} showBtn={show}/>))).slice(0, item)}
        </section>
        </>

    )
}
