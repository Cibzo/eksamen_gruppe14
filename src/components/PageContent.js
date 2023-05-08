import { pages } from "../data/pages";
import shopLogo from "../data/logos/1x/macslogo_black.png"
import Header from "./Header";
import PageSection from "./PageSection";
import Titles from "./Titles";

export default function PageContent({PageName, ClasName, TitleTag, kilde}){ 
    const pageData = kilde === "DashCont" ? pages : pages.filter(filterdPage => filterdPage.name === PageName)
    return (
        <>
        <Header logo={shopLogo} pgdata={pages} />
        <Titles titleName={PageName} titleTag={TitleTag}/>
        <main className={ClasName}>
        {pageData.map(section => (
        <PageSection
                    key={section.id}
                    fromPage={kilde}
                    libaryName={section.name}
                    secClasName={section.clas}
                    secNavBtn={section.navdash}
                    secBol={section.hide_buy}
                    antall={section.ant}
                    secTag={section.tag}/>))}
        
        </main>
        </>
    )
}