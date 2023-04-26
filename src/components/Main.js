import { pages } from "../data/pages"
import Header from "./Header"
import Page from "./Page"



export default function Main () {
    return (
        <>
        <main>
            <Header/>
            <Page page_name={pages[0].name} show={pages[0].buy} enter={pages[0].visit}/>
            <Page page_name={pages[1].name} show={pages[1].buy} enter={pages[1].visit}/>
            <Page page_name={pages[2].name} show={pages[2].buy} enter={pages[2].visit}/>
        </main>        
        </>

    )
   
  
}