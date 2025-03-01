export const Bar = ({ inputId, minute, second }) => {

    return <div className="row">
        <label htmlFor={inputId} className="col-10">
            <button className="btn bg-light text-dark m-2">Start</button>
        </label>
        <div className="timer text-light col-2 display-3">{minute}:{second}</div>
    </div>
}