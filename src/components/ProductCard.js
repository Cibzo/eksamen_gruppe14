import ProductDesc from "./ProductDesc";


export default function ProductCard({id, bilde, name, title, generes}){
    return (
            <>
            <article key={id} className={name}>
                <ProductDesc pic={bilde} name={title} sjanger={generes} />
            </article>
            </>
            )
}