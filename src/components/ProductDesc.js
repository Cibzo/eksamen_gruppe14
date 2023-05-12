import Image from "./Image";
import Titles from "./Titles";

export default function ProductDesc({pic, name, sjanger, clsname}){
    return (
            <>
            <Image bilde={pic} clastxt={clsname} />
            <Titles titleTag={"h3"} titleName={name} />
            <span className={sjanger}>{sjanger}</span>
            </>
        )
}
