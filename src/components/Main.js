//import Page from "./Page"
import { pages } from "../data/pages"

import GameShop from "./GameShop"
import Header from "./Header"
import MyFavLib from "./MyFavorite"
import MyLib from "./MyLibrary"


export default function Main () {
    return (
        <>
        <main>
            <Header/>
            <GameShop page_name={pages[0].name} show={pages[0].hide_buy} enter={pages[0].visit} item={pages[0].item_length} />
            <MyFavLib page_name={pages[2].name} show={pages[2].hide_buy} enter={pages[2].visit} item={pages[2].item_length}/>
            <MyLib page_name={pages[1].name} show={pages[1].hide_buy} enter={pages[1].visit} item={pages[1].item_length}/>
            {/*(pages).map(pages => (<Page page_name={pages.name} show={pages.hide_buy} enter={pages.visit} item={pages.item_length}/>))*/}
        </main>

        </>
        
    )
  
}