import { mygames, store } from "../data/games";


export default function PageContent({contPageTag, contPageName, contPageClas, contPageBtnBuy, contPageNav, contPageId}){
    const data = contPageName === "GAMESHOP" ? store : mygames
    console.log(contPageTag)
    return (
        <>
        <main className={contPageName}>
        <PageContent
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