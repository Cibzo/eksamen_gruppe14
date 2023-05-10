import ProductDesc from "./ProductDesc";
export default function ProductCard({ id, bilde, title, generes, cls}) {
  return (
    
    <ProductDesc
      key={id}
      pic={bilde}
      name={title}
      sjanger={generes.join(", ")}
      clstit={cls}
    />
  );
}
