export default function Titles({titleName, hide, titleTag, clastxt}){
    const Tag = titleTag === undefined ? "h1": titleTag
    return <Tag hidden={hide} className={clastxt} >{titleName}</Tag>      
}