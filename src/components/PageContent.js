import { mygames, store } from "../data/games";
import PageSection from "./PageSection";

export default function PageContent({contPageTag, contPageName, contPageClas, contPageBtnBuy, contPageNav, contPageId}){
    const data = contPageName === "GAMESHOP" ? store : mygames
    console.log(contPageTag)
    return (
        <>
        <main className={contPageName}>
        <PageSection
                    secTag={contPageTag}
                    libaryName={contPageName}
                    secName={contPageClas} 
                    secBtn={contPageNav}   
                    secBol={contPageBtnBuy}
                    secData={data}
                    secId={contPageId}/>


        </main>
        </>
    )
}