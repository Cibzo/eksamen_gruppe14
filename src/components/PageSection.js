import Btn from "./Btn";
import { randIndex } from "./Functions";
import ProductCard from "./ProductCard";
import Title from "./Title";

export default function PageSection({libaryName, secName, secBtn, secData, secTag, secBol}) {
    const TagName = "section"
    return (
            <>
            <TagName className={libaryName}>
                <Title titleTag={'h1'} titleName={secName}/>
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
