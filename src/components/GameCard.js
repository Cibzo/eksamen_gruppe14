import Image from "./Image";
import LinkBtn from "./LinkBtn";
import Titles from "./Titles";
export default function ProductCard({bilde, titel, generes, clsname, id, lnk, Bol}){
    return (            
            <article className={"gameCard" + clsname}>
            <Image bilde={bilde} Img={"imgGame"} />
            <Titles titleTag={"h3"} titleName={titel} />
            <span className={"besk_" + clsname}>{generes.join(", ")}</span>
            <LinkBtn atr={id} 
                    lnk={lnk}
                    linkCls={"BuyBtn" + clsname}
                    name={"Buy"} hide={Bol} />
            </article> 
        )
}
