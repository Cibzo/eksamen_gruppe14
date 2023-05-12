import { Link } from "react-router-dom"
import Image from "./Image"
import Nav from "./Nav"

export default function Header({logo, pgdata}) {
    return ( 
            <>
            <header>
            <Link id={125} to="/" ><Image bilde={logo}/></Link>
            <Nav navPges={pgdata}/>
            </header>
            </>
        )
    }