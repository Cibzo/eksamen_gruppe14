import Navigation from "./Navigation";
import logo from "../data/logos/1x/macslogo_black.png"
import Picture from "./Picture";

export default function Header () {
    return (
        <>
        <header>
        <Picture bilde={logo} />
        <Navigation/>
        </header>
        </>
    )
}