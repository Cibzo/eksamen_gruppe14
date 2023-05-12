import { Link } from "react-router-dom";

export default function LinkBtn ({atr, link, name, hide}) {
    return <Link key={atr} to={link} ><button hidden={hide} key={atr}>{name}</button></Link>
    
}

