import { TesterInput } from "./TesterInput"
import { SecondRow } from "./SecondRow"
import { ThirdRow } from "./ThirdRow"
import { FirstRow } from "./FirstRow"

export const Section = ( { wordIndex, word } ) => {
    return <section>
        <div className="keyboard__tester-input">
               <TesterInput word = {word} wordIndex={wordIndex}/>
        </div>
        <div className="keyboard__section w-75 mx-auto my-5 p-4 rounded">
            <FirstRow />
            <SecondRow />
            <ThirdRow />
        </div>
    </section>
}