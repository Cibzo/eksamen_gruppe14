import Title from "../components/Title";
import PageSection from "./PageSection";

export default function PageContent({pageName, secName}){
    return (
        <>
        <main className={pageName}>
        <Title titleName={pageName}/>
        <PageSection sectionTitle={secName}/>
        </main>
        </>
    )
}