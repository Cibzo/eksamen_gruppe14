export default function Titles({titleName, hide, titleTag, clsTit}){
    const Tag = titleTag === undefined ? "h1": titleTag
    return <Tag className={clsTit + "Titles"} hidden={hide} >{titleName}</Tag>      
}