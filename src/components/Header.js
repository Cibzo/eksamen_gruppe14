import { Link } from "react-router-dom";
import Image from "./Image";
import Nav from "./Nav";

export default function Header({logo, pgdata}) {
    return ( 
            <>
            <header>
                <Link to="/" >
                    <Image bilde={logo} imgClas={"imgHead"} />
                </Link>
                <Nav navPges={pgdata}/>
            </header>
            </>
        )
    }
