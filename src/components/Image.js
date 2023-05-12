export default function Image({id, bilde, clsText}) {
    return <img id={id} className={clsText} alt={bilde} src={bilde}/>
}