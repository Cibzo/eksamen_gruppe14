//import Page from "./Page"
import { pages } from "../data/pages";
<<<<<<< HEAD
=======

>>>>>>> parent of 8d830e3 (opprettet en ny branch fra denne "assembly")
import GameShop from "./GameShop";
import MyFavLib from "./MyFavorite";
import MyLib from "./MyLibrary";

export default function Main() {
  return (
    <>
      <main>
        <GameShop
          key={pages[0].id}
          page_name={pages[0].name}
          stil={pages[0].stil}
          show={pages[0].hide_buy}
          enter={pages[0].visit}
          item={pages[0].item_length}
        />
        
        <MyLib
          key={pages[1].id}
          page_name={pages[1].name}
          stil={pages[1].stil}
          show={pages[1].hide_buy}
          enter={pages[1].visit}
          item={pages[1].item_length}
        />

        <MyFavLib
          key={pages[2].id}
          page_name={pages[2].name}
          stil={pages[2].stil}
          show={pages[2].hide_buy}
          enter={pages[2].visit}
          item={pages[2].item_length}
        />
        
        {/*(pages).map(pages => (<Page page_name={pages.name} show={pages.hide_buy} enter={pages.visit} item={pages.item_length}/>))*/}
      </main>
    </>
  );
}
