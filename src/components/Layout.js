import { Outlet } from "react-router";
import Header from "./Header";
import shopLogo from "../data/logos/1x/macslogo_black.png"
import { pages } from "../data/pages";

export default function Layout () {
    return (
        <>
        <div className="container">
            <Header logo={shopLogo} pgdata={pages}/>
            <main>
                <Outlet/>
            </main>
            <footer> 
            </footer>
        </div>
        </>
    )
}