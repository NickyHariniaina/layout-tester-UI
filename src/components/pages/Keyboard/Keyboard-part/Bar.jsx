import "./Bar.css";

export const Bar = ({ inputId, minute, second, handleClick }) => {

    return <div className="button row">
        <button htmlFor={inputId} className="button__start btn m-2 btn-outline-light col" onClick={handleClick}>Start</button>
        <button className="button__submit btn btn-outline-success m-2 col">Submit</button>
        <button className="button__pause btn btn-outline-warning m-2 col">Pause</button>
        <button className="button__reset btn btn-outline-danger m-2 col">Reset</button>
        <div className="timer text-light fs-2 text-center">{minute}:{second}</div>
    </div>
}
