import PageContent from "../components/PageContent";
import { pages } from "../data/pages";

export default function Dashboard() {
    return(
        <> 
        {pages.map(pages => (
        <PageContent
                    contPageTag={pages.tag} 
                    contPageName={pages.name}
                    contPageClas={pages.clas}
                    contPageBtn={pages.btn_buy}
                    contPageNav={pages.nav}
                    contPageId={pages.id}/>
                    ))}
        </>
    )
}

