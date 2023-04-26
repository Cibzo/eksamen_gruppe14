
export default function ProdCard ({bilde, title, sjanger}) {
    return (
        <>
            <article>
            <img src={bilde}></img>
            <h1>{title}</h1>
            <span>{sjanger}</span>
            </article>
        </>
    )
}