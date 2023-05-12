import { Link } from "react-router-dom";

export default function LinkBtn ({atr, lnk, name, hide}) {
    return <Link key={atr} to={lnk} ><button hidden={hide} key={atr}>{name}</button></Link>
    
}

