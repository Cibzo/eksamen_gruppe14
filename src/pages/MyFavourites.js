import GameCard from "../components/GameCard"
import Titles from "../components/Titles"
import { mygames } from "../data/games"

export default function MyFavourites({randSort, amount, clsn, pgtitle}) {
    let pagename = pgtitle === undefined ? "My Favourites" : pgtitle 
    let myFavGames = mygames.filter(Game => Game.fav === true)

    return( 
    <>
    <Titles key={550} title={pagename} tagType={"h1"}/>
    <div className={clsn}>
    <GameCard randSort={randSort} amount={amount} games={myFavGames} hideBuy={true} />
    </div>
    </>
) 
}
