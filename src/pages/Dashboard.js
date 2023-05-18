import LinkBtn from "../components/LinkBtn";
import GameShop from "./GameShop";
import MyFavourites from "./MyFavourites";
import MyGames from "./MyGames";
export default function Dashboard() {
    return( 
            <div className="Dash">
                <section className="DBGameShop" >
                    <LinkBtn lnk={"/GameShop"} name={"Visit shop"} />
                    <GameShop amount={3} randSort={true} clsn={"DBGameShop"} />
                </section >
                <section className="DBMyGames">
                    <MyGames amount={4} randSort={true} clsn={"DBMyGames"} pgtitle={"My Games-library"}/>
                    <LinkBtn lnk={"/MyGames"} name={"Go to library"} />
                </section >
                <aside className="DBMyFavourites">
                    <MyFavourites amount={2} randSort={true} clsn={"DBMyFavourites"} pgtitle={"Favourites"} />
                    <LinkBtn lnk={"/MyFavourites"} name={"Go to favourites"}  />
                </aside>
            </div>
    )
    
}
