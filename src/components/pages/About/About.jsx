import { Navbar } from "../../Navbar/Navbar"
export const About = () => {
    return <div className="about-section">
        <header className="about-section__header d-flex flex-row align-items-center bg-dark justify-content-around py-2">
            <h1 className="text-light">About us</h1>
            <Navbar 
                option1="Home"
                link1="/"
                option2="Start testing"
                link2="/keyboard"
                option3="Settings"
                link3="/keyboard/settings"
                option4="Documentation"
                link4="/documentation"/>
        </header>
    </div>
}