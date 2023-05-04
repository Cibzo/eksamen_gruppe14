import Picture from "./Picture";
import Title from "./Title";
function ProdCard ({pic, title, sjanger}) {
    
    return (
        <>
            <article>
                <Picture bilde={pic}/>
                <Title text={title}/>
                <span>{sjanger.join(", ")}</span>
            </article>
        </>
    )
}