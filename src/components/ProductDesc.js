import Image from "./Image";
import Titles from "./Titles";

export default function ProductDesc({pic, name, sjanger}){
    return (
            <>
            <Image bilde={pic}/>
            <Titles tittleTag={"h4"} titleName={name} />
            <span className={sjanger}>{sjanger}</span>
            </>
        )
}
