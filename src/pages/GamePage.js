import { useParams } from "react-router-dom";
import { mygames, store } from "../data/games";
import Image from "../components/Image";
import Titles from "../components/Titles";
import LinkBtn from "../components/LinkBtn";

export default function GamePage() {
    const {gameId} = useParams()
    const games = [...store, ...mygames]
    const game = games.find((prod) => prod.id == gameId)
    const { titel, id, released, genres, link, img  } = game
    let hidBuyBtn =  gameId > 5 ? true : false

    return  (
                <section>
                    <article className={"gameCard"}>
                    <Image bilde={img} ImgCls={"imgGame"} />
                    <Titles className={"ImgGameTitl"} titleTag={"h3"} titleName={titel} />
                    <p className={"besk"}>Genres: {genres.join(", ")}</p>
                    <time dateTime={released}>Published: {released}</time>
                    <br/>
                    <LinkBtn atr={id} 
                            lnk={link}
                            cls={"BuyBtn"}
                            name={"Buy"} hide={hidBuyBtn} />
                    </article>
                </section>
        
            )

                            
    
    
}