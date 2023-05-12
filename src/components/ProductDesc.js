import Image from "./Image";
import Titles from "./Titles";

export default function ProductDesc({pic, name, sjanger, clsname}){
    return (
            <>
            <Image bilde={pic} clsTxt={"img_"+clsname} />
            <Titles titleTag={"h3"} titleName={name} />
            <span className={"besk_" + clsname}>{sjanger}</span>
            </>
        )
}
