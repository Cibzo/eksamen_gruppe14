import { mygames, store } from "../data/games";
import RandomSort from "./Functions";
import LinkBtn from "./LinkBtn";
import ProductCard from "./ProductCard";
import Titles from "./Titles";

export default function PageSection({secId, libaryName, secClasName, secNavBtn, secTag, secBol, antall, fromPage}) {
    let data = libaryName === "GAMESHOP" ? store : mygames
    data = libaryName === "MY FAVOURITES" ?  mygames.filter(Game => Game.fav === true) : data
    const TagName = fromPage === "DashCont" ?  secTag : "section"
    const noDisp = fromPage === "DashCont" ? false : true
    const antallSpill = fromPage === "DashCont" ? antall : data.length
    const spill = fromPage === "DashCont" ? RandomSort(data) : data
    
    return (
            <>
                <TagName key={secId} className={secClasName}>
                <Titles titleTag={"h2"} titleName={libaryName} hide={noDisp} />
                <LinkBtn name={secNavBtn} hide={noDisp} atr={secId} link={secClasName} />
                <div className={secClasName} >
                {spill.map(data => (
                /*----Link------*/
                <article key={data.id}>
                <ProductCard 
                    title={data.title}
                    generes={data.genres}
                    bilde={data.img}/>
                <LinkBtn atr={data.id} 
                    link={data.link} 
                    name={"Buy"} hide={secBol}/>
                </article>
                /*----Link------*/
                )).slice(0, antallSpill)}
                </div>
                </TagName>
            </>
    )
}
