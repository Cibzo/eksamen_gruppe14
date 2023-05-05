import PageContent from "../components/PageContent";
import { pages } from "../data/pages";

export default function GameShop() {
    return(
        <> 
        <PageContent 
                    contPagetag={pages[0].tag} 
                    contPagename={pages[0].name}
                    contPageclas={pages[0].clas} 
                    contPagebtn={pages[0].nav}/>
        </>
    )
}

