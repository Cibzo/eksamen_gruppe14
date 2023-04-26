import Header from "./Header"
import ProdCard from "./ProdCard"
export default function Main () {
    return (
        <>
        <main>
            <Header/>
            <h1>GAMESHOP</h1>
            <button>Vistit shop</button>
            <section className="game-shop">
                <ProdCard/>
                <button>Buy</button>
                <ProdCard/>
                <button>Buy</button>
                <ProdCard/>
                <button>Buy</button>
            </section>
            <h1>My GAMES-LIBRARY</h1>
            <button>Go to libary</button>
            <section className="my-lib">
                <ProdCard/>
                <ProdCard/>
                <ProdCard/>
                <ProdCard/>
            </section>
            <h1>MY FAVOURITES</h1>
            <button>Go to favourites</button>
            <section className="my-fav">
                <ProdCard/>
                <ProdCard/>
            </section>
        </main>
        </>
    )
}