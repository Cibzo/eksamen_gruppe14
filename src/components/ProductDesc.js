import Image from "./Image";
import Titles from "./Titles";

export default function ProductDesc({pic, name, sjanger}){
    return (
            <>
            <Image bilde={pic}/>
            <Titles titleTag={"h3"} titleName={name} />
            <span className={sjanger}>{sjanger}</span>
            </>
        )
}
