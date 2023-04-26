import ProdCard from "./ProdCard";
import Title from "./Title";
import pic from "./pic.png"

export default function Page ({page_name, enter, show}) {
    return (
        <>
        <section>
        <Title text={page_name} />
        <button>{enter}</button>
        <ProdCard title={"Call of duty"} sjanger={"Action"} bilde={pic} />
        <button hidden={show}>Buy</button>
        </section>
        </>

    )

}