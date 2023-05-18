import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Header({logo, pgdata}) {
    return ( 
            <>
            <header>
            <Link to="/" reloadDocument>
                <img src={logo} alt={logo} className={"imgHead"} />
            </Link>
            <Nav navPges={pgdata}/>
            </header>
            </>
        )
    }
