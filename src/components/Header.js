<<<<<<< HEAD
import { Link } from "react-router-dom"
import Image from "./Image"
import Nav from "./Nav"

export default function Header({logo, nav}) {
    return ( 
            <>
            <header>
            <Link to="/" ><Image bilde={logo}/></Link>
            <Nav page_title={nav}/>
            </header>
            </>
        )
    }
=======
import Navigation from "./Navigation";
import Title from "./Title";
import logo from "../data/logos/1x/macslogo_black.png"

export default function Header () {
    return (
        <>
        <header>
            <Title bilde={logo} />
            <Navigation/>
        </header>
        </>
    )
}
>>>>>>> parent of 8d830e3 (opprettet en ny branch fra denne "assembly")
