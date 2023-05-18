import { Outlet } from "react-router";
import Header from "./Header";
import shopLogo from "../data/logos/1x/macslogo_black.png"
import { pages } from "../data/pages";

export default function Layout () {
    return (
        <div className="container">
            <Header logo={shopLogo} pgdata={pages}/>
            <main>
                <Outlet/>
            </main>
            <footer>
                React eksamen prosjekt i Utvikling av interaktive nettsteder kull 2023 ved Høgskolen i Østfold avd. Halden av Gruppe 14
                medlemer: Hamsa Casale, Ruben Tuft og Jennie-Lovise Nordheim Bjerke 
            </footer>
        </div>
    )
}