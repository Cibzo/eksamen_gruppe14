import LinkBtn from "./LinkBtn";
import Titles from "./Titles";
import {v4 as uuidv4} from "uuid" //uuidv4 er for å lage unike key for å unngå "Each child should have uinque key" error
import RandomSort from './Functions';
//Kilde: Husker det fra tidligere youtube video: https://www.youtube.com/watch?v=_-7n_7DkI28
export default function GameCard({games, cls, randSort, hideBuy, amount, hideTime, hidRead}){
        let data = randSort === undefined ? games : RandomSort(games)
        let ant = amount === undefined ? games.length : amount
        let hT = hideTime === undefined ? true : hideTime
        let hR = hidRead === undefined ? false : hidRead  
        let Tagname = randSort === undefined ? "section" : "div"
        return (
                <Tagname className={cls} > 
                {data.map(data =>                
                <article key={uuidv4()} className={cls}>
                <img key={uuidv4()} className="imgGame" src={data.img} alt={data.img} />
                <Titles key={uuidv4()} tag={"h3"} title={data.titel} />
                <p key={uuidv4()} >{data.generes}</p>
                <time dateTime={data.released} hidden={hT} >Published: {data.released}</time>
                <LinkBtn key={uuidv4()} lnk={data.lnk} cls={"BuyBtn" + cls} name={"Buy"} hide={hideBuy} />
                <LinkBtn cls={"readMoreBtn"} key={uuidv4()} lnk={`/GamePage${data.id}`} hide={hR} name={"Read More"}  />
                </article>).slice(0, ant)}
                </Tagname>    
        )
}
