import PageContent from "../components/PageContent";
import { pages } from "../data/pages";

export default function MyFavourites() {
    return(
    <PageContent 
                    contPagetag={pages[2].tag} 
                    contPagename={pages[2].name}
                    contPageclas={pages[2].clas} 
                    contPagebtn={pages[2].nav}/>
    )
}
