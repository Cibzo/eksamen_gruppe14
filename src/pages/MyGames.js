import GameCard from "../components/GameCard";
import Titles from "../components/Titles";
import { mygames } from "../data/games";

export default function MyGames({randSort, amount, clsn, pgtitle}) {
    let pagename = pgtitle === undefined ? "My Games" : pgtitle
    return( 
    <>
    <Titles key={550} title={pagename} tagType={"h1"}/>
    <div className={clsn}>
    <GameCard randSort={randSort} amount={amount} games={mygames} hideBuy={true} />
    </div>
    </>
)
}
