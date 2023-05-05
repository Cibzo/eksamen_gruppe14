import Image from "./Image";
import Title from "./Title";

export default function ProductDesc({pic, name, sjanger}){
    return (
            <>
            <Image bilde={pic}/>
            <Title tag={"h4"} prodName={name} />
            <span className={sjanger}>{sjanger}</span>
            </>
        )
}
