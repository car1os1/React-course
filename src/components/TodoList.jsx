
const TodoList = ({ children }) => {
    return (
        <ul style={{ color: '#F4F4F4', position: "relative", borde: 0, padding: 0 }}>
            {children}
        </ul >
    )
}

export { TodoList }