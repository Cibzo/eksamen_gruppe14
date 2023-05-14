//import { Link } from "react-router-dom";
import { mygames, store } from "../data/games";
import RandomSort from "./Functions";
import LinkBtn from "./LinkBtn";
import ProductCard from "./ProductCard";
import Titles from "./Titles";

export default function PageSection({
  secId,
  libaryName,
  secClasName,
  secNavBtn,
  secTag,
  secBol,
  antall,
  fromPage,
}) {
  let data = libaryName === "GAMESHOP" ? store : mygames;
  data =
    libaryName === "MY FAVOURITES"
      ? mygames.filter((Game) => Game.fav === true)
      : data;
  const TagName = fromPage === "DB" ? secTag : "section";
  const noDisp = fromPage === "DB" ? false : true;
  const antallSpill = fromPage === "DB" ? antall : data.length;
  const spill = fromPage === "DB" ? RandomSort(data) : data;

  return (
    <>
      <TagName className={secClasName}>
        <Titles clsTit={secClasName} titleTag={"h2"} titleName={libaryName} hide={noDisp} />
        <Btn name={secNavBtn} hide={noDisp} cls={secClasName + "Upper"} />
        <div className={secClasName}>
          {spill
            .map((data) => (
              /*----Link------*/
              <article key={data.id} className={secClasName}>
                <ProductCard
                  title={data.title}
                  generes={data.genres}
                  bilde={data.img}
                  cls={secClasName}
                />
                <Btn
                  atr={data.id}
                  link={data.link}
                  name={"Buy"}
                  cls={"BuyBtn" + secClasName}
                  hide={secBol}
                />
              </article>
              /*----Link------*/
            ))
            .slice(0, antallSpill)}
        </div>
        <Btn name={secNavBtn} hide={noDisp} cls={secClasName + "Down"} />
      </TagName>
    </>
  );
}
