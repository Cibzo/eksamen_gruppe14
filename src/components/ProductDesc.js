import Image from "./Image";
import ProductTitle from "./ProductTitle";

export default function ProductDesc({pic, name, sjanger}){
    return (
            <>
            <ul>
                <Image bilde={pic}/>
                <ProductTitle prodName={name} />
                <span className={sjanger}>{sjanger}</span>
            </ul>
            </>
        )
}
