import { useParams } from "react-router-dom";
import { mygames, store } from "../data/games";
import GameCard from "../components/GameCard";

export default function GamePage() {
    const {gameId} = useParams()
    const games = [...store, ...mygames]
    const game = games.filter(Game => Game.id === parseInt(gameId))
    let hidBuyBtn =  gameId > store.length ? true : false

    return  (
                <section>
                    <GameCard games={game} hideBuy={hidBuyBtn} hideTime={false} hidRead={true} />
                </section>
        
            )

                            
    
    
}