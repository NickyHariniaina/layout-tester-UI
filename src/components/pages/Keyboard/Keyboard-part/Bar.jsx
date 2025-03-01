export const Bar = ({ inputId, minute, second }) => {

    return <div className="row">
        <button htmlFor={inputId} className="btn m-2 btn-light col">Start</button>
        <button className="btn btn-success m-2 col">Submit</button>
        <button className="btn btn-outline-warning m-2 col">Pause</button>
        <button className="btn btn-outline-danger m-2 col">Reset</button>
        <div className="timer text-light fs-2 text-center">{minute}:{second}</div>
    </div>
}