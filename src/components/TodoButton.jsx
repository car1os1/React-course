import './TodoButton.css';


const TodoButton = () => {
    return (
        <button className="CreateTodoButton" onClick={() => console.log('le diste click')}> + </button>
    )
}

export { TodoButton }