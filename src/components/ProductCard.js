import ProductDesc from "./ProductDesc";
export default function ProductCard({id, bilde, title, generes}){
    return <ProductDesc 
                        key={id}
                        clsname={"game"}
                        pic={bilde}
                        name={title}
                        sjanger={generes.join(", ")}/>
}