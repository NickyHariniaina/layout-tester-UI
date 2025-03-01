import { useState, useId } from "react"
import { Bar } from "./Bar"

export const TesterInput = ({ word, onKeyDown, wordInde })  => {
    const userInput = document.querySelector(".userInput")
    const inputId = useId()
    const [typed, setTyped] = useState("Type...")
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(30)

    const touch = /[a-zA-Z0-9]/

    const handleKeyDown = (event) => {
		if (event.key === " ") {
			setTyped("")
			userInput.value = ""
		}
		else if (touch.test(event.key) && event.key.length === 1) { 
            setTyped(text => text + event.key)
            if (typed === "Type...") setTyped(text => touch.test(event.key) ? event.key : " ")
        } else if (event.key === "Backspace") {
            setTyped(text => {
                text = text.split("")
                text.pop()
                return text.join("")
            })
        }
        
	}

    return <div className="container-fluid bg-dark border rounded my-1" onKeyDown={handleKeyDown}>
        <div className="keyboard__tester-input__word fs-1 px-4 py-1 text-light text-nowrap px-2">
            {word}
        </div>
        <div className="keyboard__tester-input__answer fs-1 px-4 py-1 text-light text-nowrap"> 
            Nothing in the world
        </div>
        <div className="keyboard__tester-input__preview fs-4 my-2 py-1 mx-auto w-25 text-center bg-light rounded">
            {typed}
        </div>
        <input type="text" className="form-control w-25 mx-auto my-2 userInput d-none" id={inputId} />
        <Bar inputId={inputId} minute={minute} second={second}/>
    </div>
}