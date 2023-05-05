import { mygames, store } from "../data/games";
import PageSection from "./PageSection";

export default function PageContent({contPagetag, contPagename, contPageclas, contPagebtn, contPagebtn_buy, contData}){
    const data = contPagename === "Gameshop"? store : mygames
    return (
        <>
        <main className="main">
                <PageSection
                    secTag={contPagetag}
                    libaryName={contPagename}
                    secName={contPageclas} 
                    secBtn={contPagebtn}  
                    secData={data} 
                    secBol={contPagebtn_buy}/>
        </main>
        </>
    )
}