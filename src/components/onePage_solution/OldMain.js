import { pages } from "../data/pages"
import Header from "./Header"
import Page from "./Page"



export default function Main () {
    return (
        <>
        <main>
            <Header/>
            {(pages).map(pages => (<Page page_name={pages.name} show={pages.hide_buy} enter={pages.visit} item={pages.item_length}/>))} 
            {/*<Page page_name={pages[0].name} show={pages[0].hide_buy} enter={pages[0].visit} item={pages[0].item_length}/>
            <Page page_name={pages[1].name} show={pages[1].hide_buy} enter={pages[1].visit} item={pages[1].item_length}/>
            <Page page_name={pages[2].name} show={pages[2].hide_buy} enter={pages[2].visit} item={pages[1].item_length}/>*/}
        </main> 
    
        </>
        
    )
  
}