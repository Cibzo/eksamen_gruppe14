import { mygames } from "../data/games";
import Btn from "./Btn";
import ProdCard from "./ProdCard";
import Title from "./Title";

export default function MyFavLib ({page_name, enter, show}) {
    return (
        <>
        <section className={page_name}>
            <Title text={page_name} />
            <Btn id={enter} link={""} name={page_name} />
            {(mygames.filter(Game => Game.fav === true).map(favGame => 
            (<ProdCard 
                key={favGame.id}
                title={favGame.title}
                sjanger={favGame.genres}
                pic={favGame.img}
                showBtn={show}/>
                )))}
        </section>
        </>

    )
}