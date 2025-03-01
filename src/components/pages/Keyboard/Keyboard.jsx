import { useState, useEffect } from "react"
import { Navbar } from "../../Navbar/Navbar"
import { Score } from "./Score/Score"
import { Section } from "./Keyboard-part/Section"
import "./Keyboard.css"


export const Keyboard = ({ layout }) => {
    const [word, setWord] = useState(" ")
    let wordIndex = 0;
    useEffect (() => {
        const fetchData = async (url) => {
            const data = await fetch(url)
            if (data.ok){
                const word = await data.json()
                console.log(word)
                setWord(word.join(" "))
            }
        }
        fetchData("https://random-word-api.vercel.app/api?words=10")
    }, [])
    
    return <div className="keyboard">
        <header className="keyboard__header bg-dark d-flex flex-row justify-content-around align-items-center py-2">
            <h1 className="text-light">Start typing</h1>
            <Navbar 
                option1="Go back home" link1="/"
                option2="Score" link2="/keyboard/score"
                option3="Settings" link3="/keyboard/settings"
                option4="About us" link4="/about_us"/>
        </header>
        <Section wordIndex = {wordIndex} word = {word} />
    </div>
}