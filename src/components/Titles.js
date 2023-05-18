export default function Titles({title, tag, hide}){
    const Tag = tag === undefined ? "h1": tag
    return <Tag hidden={hide}>{title}</Tag>      
}