export default function Image({id, bilde, clsTxt}) {
    return <img id={id} className={clsTxt} alt={bilde} src={bilde}/>
}
