import { Link } from "react-router-dom";

export default function LinkBtn ({atr, lnk, name, hide, cls}) {
    return <Link key={atr} to={lnk} ><button hidden={hide} className={cls} key={atr}>{name}</button></Link>
    
}

