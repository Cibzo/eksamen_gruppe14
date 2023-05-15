export default function Titles({titleName, hide, titleTag}){
    const Tag = titleTag === undefined ? "h1": titleTag
    return <Tag hidden={hide}>{titleName}</Tag>      
}