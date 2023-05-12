export default function Titles({titleName, hide, titleTag, clstxt}){
    const Tag = titleTag === undefined ? "h1": titleTag
    return <Tag hidden={hide} className={clstxt} >{titleName}</Tag>      
}