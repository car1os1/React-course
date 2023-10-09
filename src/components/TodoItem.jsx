


function TodoItem(props) {
    return (
        <li style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <span style={{}}>x</span>
            <p >{props.text} </p>
            <span>y</span>

        </li >
    )
}
export { TodoItem }