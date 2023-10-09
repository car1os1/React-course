import './TodoItem.css'


function TodoItem(props) {
    return (
        <li className="todoI">
            <div style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between" /* Alinea elementos dentro del div */
            }}>
                <span className={`Icon Icon-Check ${props.completed && "Icon-check--active"}`}>V</span>
                <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>

                <span className={`Icon Icon-delete`}>x</span>
            </div>
        </li>
    )
}

export { TodoItem }
