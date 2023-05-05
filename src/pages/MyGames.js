import PageContent from "../components/PageContent";
import { pages } from "../data/pages";

export default function MyGames() {
    return(
    <PageContent 
                    contPagetag={pages[1].tag} 
                    contPagename={pages[1].name}
                    contPageclas={pages[1].clas} 
                    contPagebtn={pages[1].nav}/>
    )
}