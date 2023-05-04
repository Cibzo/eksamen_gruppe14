//import Page from "./Page"
import { pages } from "../data/pages";
import GameShop from "./GameShop";
import MyFavLib from "./MyFavorite";
import MyLib from "./MyLibrary";

 function Dashboard() {
  return (
    <>
        
        <GameShop
          key={pages[0].id}
          page_name={pages[0].name}
          stil={pages[0].stil}
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
    
    </>
        
  )
      
}