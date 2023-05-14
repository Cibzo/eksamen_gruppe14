//import { Link } from "react-router-dom";
import { mygames, store } from "../data/games";
import RandomSort from "./Functions";
import LinkBtn from "./LinkBtn";
import ProductCard from "./ProductCard";
import Titles from "./Titles";

export default function PageSection({secId, libaryName, secClasName, secNavBtn, secTag, secBol, antall, fromPage, seclink}) {
    let data = libaryName === "GAMESHOP" ? store : mygames
    data = libaryName === "MY FAVOURITES" ?  mygames.filter(Game => Game.fav === true) : data
    const TagName = fromPage === "DB" ?  secTag : "section"
    const noDisp = fromPage === "DB" ? false : true
    const antallSpill = fromPage === "DB" ? antall : data.length
    const spill = fromPage === "DB" ? RandomSort(data) : data
    
    return (
            <>
                <TagName key={secId} className={secClasName}>
                <Titles clsTit={secClasName} titleTag={"h2"} titleName={libaryName} hide={noDisp} />
                <LinkBtn lnk={seclink} name={secNavBtn} hide={noDisp} atr={secId} cls={secClasName + "Upper" }  />
                <div className={secClasName} >
                {spill.map(data => (
                /*----Link------????*/
                <ProductCard
                    key={data.id}
                    titel={data.title}
                    generes={data.genres}
                    bilde={data.img}
                    id={data.id} 
                    lnk={data.link} 
                    Bol={secBol}
                    clsname={secClasName} />
                    /*----Link------????*/
                )).slice(0, antallSpill)}
                </div>
                <LinkBtn lnk={seclink} name={secNavBtn} hide={noDisp} atr={secId} cls={secClasName + "Down" } />
                </TagName>
            </>
    )
}
