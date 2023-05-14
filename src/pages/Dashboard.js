import PageContent from "../components/PageContent";
import { pages } from "../data/pages";


export default function Dashboard() {
    return(
        <> 
        <PageContent
                    kilde={"DB"}
                    TitleTag={"h1"}
                    ClasName={"Dash"}
                    pageData={pages}/>
        </>
    )
}
