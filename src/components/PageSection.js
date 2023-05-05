import Btn from "./Btn";
import { randIndex } from "./Functions";
import ProductCard from "./ProductCard";
import Titles from "./Titles";

export default function PageSection({libaryName, secName, secBtn, secData, secTag, secBol, secId}) {
    const TagName = "div"
    console.log(secTag)
    return (
            <>
            <TagName key={secId} className={secName}>
                <Titles titleTag={"h1"} titleName={libaryName}/>
                <Btn name={secBtn}/>
                {randIndex.map(randIndex => (
                <article key={secData[randIndex].id}>
                <ProductCard 
                    title={secData[randIndex].title}
                    generes={secData[randIndex].genres}
                    bilde={secData[randIndex].img}/>
                <Btn atr={secData[randIndex].id} 
                    link={secData[randIndex].link} 
                    name={"Buy"} hide={secBol} />
                </article>)).slice(0, secBol)}
            </TagName>
            </>
    )
}
