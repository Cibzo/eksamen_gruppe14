import { useParams } from "react-router-dom";
import { mygames, store } from "../data/games";
import Image from "../components/Image";
import Titles from "../components/Titles";
import LinkBtn from "../components/LinkBtn";

export default function GamePage() {
  const { gameId } = useParams();
  const games = [...store, ...mygames];
  /*Siden parametern med ID for spille kommer inn som string,
  kunne ha brukt "==", men da kommer det en WARNING, 
  derfor brukte jeg parsInt() for å få kunne bruke "==="*/
  const game = games.find((prod) => prod.id === parseInt(gameId));
  const { title, id, released, genres, link, img } = game;
  let hidBuyBtn = gameId > 5 ? true : false;

  return (
    <section className="singlePage">
      <article className={"gameCard"}>
        <Image bilde={img} ImgCls={"imgGame"} />
        <div className="divSinglePage">
          <Titles className={"ImgGameTitl"} titleTag={"h3"} titleName={title} />
          <p className={"besk"}>Genres: {genres.join(", ")}</p>
          <time dateTime={released}>Published: {released}</time>
          <br />
          <LinkBtn
            atr={id}
            lnk={link}
            cls={"ButtonSinglePage"}
            name={"Buy"}
            hide={hidBuyBtn}
          />
        </div>
      </article>
    </section>
  );
}
