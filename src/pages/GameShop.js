import Titles from "../components/Titles";
import GameCard from './../components/GameCard';
import { store } from './../data/games';

export default function GameShop({randSort, amount, clsn, pgtitle}) {
    let pagename = pgtitle === undefined ? "GameShop" : pgtitle  
    
    return( 
    <>
    <Titles key={20} title={pagename} tag={"h1"}/>
    <div className={clsn}>
    <GameCard randSort={randSort} amount={amount} games={store} cls={clsn} />
    </div>
    </>
)   
}

