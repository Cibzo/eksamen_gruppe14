import ProductDesc from "./ProductDesc";
export default function ProductCard({id, bilde, title, generes}){
    return <ProductDesc key={id} pic={bilde} name={title} sjanger={generes} /> 
}