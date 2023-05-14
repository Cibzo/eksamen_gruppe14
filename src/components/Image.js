export default function Image({id, bilde, ImgCls}) {
    return <img id={id} className={ImgCls} alt={bilde} src={bilde}/>
}
