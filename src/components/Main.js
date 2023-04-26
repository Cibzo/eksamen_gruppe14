import Header from "./Header"
import pic from "./pic.png"
export default function Main () {
    return (
        <>
        <main>
            <Header/>
            <section className="game-shop">
                <h1>GAMESHOP</h1>
                <button>Vistit shop</button>
                <article>
                    <img src={pic}></img>
                    <h1>Title</h1>
                    <span>Action</span>
                    <button>Buy</button>
                </article>
                <article>
                    <img src={pic}></img>
                    <h1>Title</h1>
                    <span>Action</span>
                    <button>Buy</button>
                </article>
                <article>
                    <img src={pic}></img>
                    <h1>Title</h1>
                    <span>Action</span>
                    <button>Buy</button>
                </article>
                <article>
                    <img src={pic}></img>
                    <h1>Title</h1>
                    <span>Action</span>
                    <button>Buy</button>
                </article>
            </section>
            <section className="my-lib">
                <h1>My GAMES-LIBRARY</h1>
                <article>
                    <img src={pic}></img>
                    <h1>Title</h1>
                    <span>Action</span>
                </article>
                <article>
                    <img src={pic}></img>
                    <h1>Title</h1>
                    <span>Action</span>
                </article>
                <article>
                    <img src={pic}></img>
                    <h1>Title</h1>
                    <span>Action</span>
                </article>
                <button>Go to libary</button>
            </section>
            <section className="my-fav">
                <h1>MY FAVOURITES</h1>
                <article>
                    <img src={pic}></img>
                    <h1>Title</h1>
                    <span>Action</span>
                </article>
                <article>
                    <img src={pic}></img>
                    <h1>Title</h1>
                    <span>Action</span>
                </article>
                <button>Go to favourites</button>
            </section>
        </main>
        </>
    )
}