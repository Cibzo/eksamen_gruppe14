import ProductCard from "../components/ProductCard";

export default function ProductPage() {
    return (
    <article>
        <ProductCard 
            title={data.title}
            generes={data.genres}
            bilde={data.img}/>
        <Btn atr={data.id} 
            link={data.link} 
            name={"Buy"} hide={secBol}/>
    </article>
    )
}