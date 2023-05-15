import { Link } from "react-router-dom";
import Image from "./Image";
import LinkBtn from "./LinkBtn";
import Titles from "./Titles";
export default function GameCard({bilde, titel, generes, clsname, id, lnk, Bol}){
    return (            
            <article className={"gameCard" + clsname}>
            <Image bilde={bilde} Img={"imgGame"} />
            <Titles titleTag={"h3"} titleName={titel} />
            <p className={"besk_" + clsname}>{generes.join(", ")}</p>
            <LinkBtn atr={id} 
                    lnk={lnk}
                    cls={"BuyBtn" + clsname}
                    name={"Buy"} hide={Bol} />
                <Link to={`/${id}`}><button>Read more</button></Link>
            </article> 
        )
}
