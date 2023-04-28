
export default function ProdCard ({bilde, title, sjanger, lenke, show_btn}) {
    return (
        <>
            <article>
            <img src={bilde} alt=""></img>
            <h1>{title}</h1>
            <span>{sjanger}</span>
            <button hidden={show_btn}><a href={lenke}>Buy</a></button>
            </article>
        </>
    )
}