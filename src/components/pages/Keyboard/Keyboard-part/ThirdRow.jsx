export const ThirdRow = () => {
    const chevron = ["<",">"]
    return <div className="keyboard-container__third-row">
        <p className=" btn key">{chevron[0]}</p>
        <p className=" btn key">q</p>
        <p className=" btn key">u</p>
        <p className=" btn key">y</p>
        <p className=" btn key">x</p>
        <p className=" btn key">b</p>
        <p className=" btn key">m</p>
        <p className=" btn key">w</p>
        <p className=" btn key">v</p>
        <p className=" btn key">z</p>
    </div>
}