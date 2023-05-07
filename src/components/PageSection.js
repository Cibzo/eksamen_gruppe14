import { mygames, store } from "../data/games";
import Btn from "./Btn";
import { randIndex } from "./Functions";
import ProductCard from "./ProductCard";
import Titles from "./Titles";

export default function PageSection({secId, libaryName, secClasName, secNavBtn, secTag, secBol, antall, fromPage}) {
    let data = libaryName === "GAMESHOP" ? store : mygames
    data = libaryName === "MY FAVOURITES" ?  mygames.filter(Game => Game.fav === true) : data
    const TagName = fromPage === "DashCont" ?  secTag : "section"
    const noDisp = fromPage === "DashCont" ? false : true
    const antallSpill = fromPage === "DashCont" ? antall : data.length
    const index = fromPage === "DashCont" ? randIndex :  randIndex.sort()
    
    return (
            <>
                <TagName key={secId} className={secClasName}>
                <Titles titleTag={"h2"} titleName={libaryName} hide={noDisp} />
                <Btn name={secNavBtn} hide={noDisp}/>
                <div className={secClasName} >
                {index.map(randIndex => (
                <article key={data[randIndex].id}>
                <ProductCard 
                    title={data[randIndex].title}
                    generes={data[randIndex].genres}
                    bilde={data[randIndex].img}/>
                <Btn atr={data[randIndex].id} 
                    link={data[randIndex].link} 
                    name={"Buy"} hide={secBol} />
                </article>)).slice(0, antallSpill)}
                </div>
                </TagName>
            </>
    )
}
