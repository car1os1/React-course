import './TodoCounter.css'


const TodoCounter = ({ total, completados }) => {
    return (
        <h1 className='todoC'>Has completado <span> {completados} </span> de <span>{total}  </span> tareas </h1>
    )
}

export { TodoCounter }