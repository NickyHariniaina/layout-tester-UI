import { Navbar } from "../../Navbar/Navbar"
import { SectionDocs } from "./Section-docs.jsx"

// FIXME: 
// - I don't know if i should use a map or a forEach for all of the data...
// - Complete the data in "./keyboardData.js"

// TODO: 
// - Import all images in the public files.
// - Add a css className to all of the components.
// - Edit 40 images of layout.
// - Search a design layout for the files and all the others.

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
        <SectionDocs /> 
    </div>
}
