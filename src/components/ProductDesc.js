import Image from "./Image";
import Title from "./Title";

export default function ProductDesc({pic, name, sjanger}){
    return (
            <>
            <Image bilde={pic}/>
            <Title tittleTag={"h4"} titleName={name} />
            <span className={sjanger}>{sjanger}</span>
            </>
        )
}
