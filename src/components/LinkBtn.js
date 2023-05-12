import { Link } from "react-router-dom";

export default function LinkBtn ({atr, link, name, hide}) {
    return <Link id={atr} to={link} ><button hidden={hide} id={atr}>{name}</button></Link>
    
}

