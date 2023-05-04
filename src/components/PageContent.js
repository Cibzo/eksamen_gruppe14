import { mygames, store } from "../data/games";
import PageSection from "./PageSection";

export default function PageContent({pageName}){
    return (
        <>
        <main className={pageName}>
            <PageSection
                sectionName={"GAMESHOP"} 
                enterBtn={"Visit shop"}
                games={store}/>
            <PageSection 
                sectionName={"MY FAVOURITES"} 
                enterBtn={"Go to favourites"}
                games={mygames} show={true}/>
            <PageSection 
                sectionName={"MY GAMES-LIBARY"} 
                enterBtn={"Go to library"}  
                games={mygames} show={true}/>
        </main>
        </>
    )
}