import { Link } from "react-router-dom";

export default function Btn ({atr, link, name, hide}) {
    return <Link to={link} ><button hidden={hide} id={atr} >{name}</button></Link>
    
}

