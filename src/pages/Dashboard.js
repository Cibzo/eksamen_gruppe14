import PageContent from "../components/PageContent";
import { pages } from "../data/pages";


export default function Dashboard() {
    return(
        <> 
        <PageContent
                    kilde={"DashCont"}
                    TitleTag={"h1"}
                    pageData={pages}/>
        </>
    )
}