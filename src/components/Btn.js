export default function Btn ({atr, link, name, hide}) {
    return <button hidden={hide} id={atr} ><a hidden={hide} href={link}>{name}</a></button>
    
}

