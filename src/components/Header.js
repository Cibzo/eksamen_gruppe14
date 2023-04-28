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