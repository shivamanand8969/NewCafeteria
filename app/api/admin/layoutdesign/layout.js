import Header from "../../(design)/Header";

export default function Layout({children}){
    return(
        <>
        <Header/>
        <main>
            {children}
        </main>
        </>
    )
}