import { pages } from "../data/pages";
import PageSection from "./PageSection";
import Titles from "./Titles";

export default function PageContent({PageName, ClasName, TitleTag, kilde}){ 
    const pageData = kilde === "DashCont" ? pages : pages.filter(filterdPage => filterdPage.name === PageName)
    return (
        <>
        
        <Titles titleName={PageName} titleTag={TitleTag}/>
        <main className={ClasName}>
        {pageData.map(section => (
        <PageSection
                    key={section.id}
                    fromPage={kilde}
                    libaryName={section.name}
                    secClasName={section.clas}
                    secNavBtn={section.nav}
                    secBol={section.hide_buy}
                    antall={section.ant}
                    secTag={section.tag}/>))}
        
        </main>
        </>
    )
}
