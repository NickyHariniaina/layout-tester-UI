import { Navbar } from "../../Navbar/Navbar"

export const Documentation = () => {
    return <div className="docs">
        <header className="home__header d-flex flex-row align-items-center bg-dark justify-content-around py-2">
            <h1 className="text-light">Documentation</h1>
            <Navbar 
                option1="Home"
                link1="/"
                option2="Start testing"
                link2="/keyboard"
                option3="Settings"
                link3="/keyboard/settings"
                option4="About us"
                link4="/about_us"/>
        </header>
        <section>
            <nav className="navbar bg-dark">
                <form className="container-fluid justify-content">

                </form>
            </nav>
            <main>
                
            </main>
        </section>
    </div>
}