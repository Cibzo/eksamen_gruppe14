import Title from "../components/Title";
import PageSection from "./PageSection";

export default function PageContent({pageName, title, secName}){
    return (
        <>
        <main className={pageName}>
        <Title titleName={title}/>
        <PageSection sectionTitle={secName}/>
        </main>
        </>
    )
}