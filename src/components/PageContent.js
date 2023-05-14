import { pages } from "../data/pages";
import PageSection from "./PageSection";
import Titles from "./Titles";

export default function PageContent({PageName, ClasName, TitleTag, kilde}){ 
    const pageData = kilde === "DB" ? pages : pages.filter(filterdPage => filterdPage.name === PageName)
    return (
        <>
        
        
        <main className={ClasName}>
        <Titles titleName={PageName} titleTag={TitleTag}/>
        {pageData.map(section => (
        <PageSection
                    key={section.id}
                    fromPage={kilde}
                    libaryName={section.name}
                    secClasName={kilde + section.clas}
                    secNavBtn={section.navdash}
                    secBol={section.hide_buy}
                    antall={section.ant}
                    secTag={section.tag}/>))}
        </main>
        </>
    )
}
