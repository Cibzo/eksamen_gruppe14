import ProductCard from "./ProductCard";

export default function PageSection({secName, gameName, bilde, id, generes}) {
    return (
            <>
            <section className={secName}>
                <ProductCard key={id} pic={bilde} name={gameName} generes={generes} />
            </section>
            </>
    )
}