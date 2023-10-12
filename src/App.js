import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoButton } from './components/TodoButton';
import { useState } from 'react'


const defaultTodos = [
  { text: 'limpiar ', completed: true },
  { text: 'cocinar ', completed: false },
  { text: 'lavar ', completed: true },
  { text: 'practicar ', completed: false },

]


function App() {

  const [changes, setChanges] = useState('')
  const [todos, setTodos] = useState(defaultTodos)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchTodo = todos.filter((todos) => { return todos.text.toLocaleLowerCase().includes(changes) })


  console.log('los usuarios tipearon : ' + changes)

  const completosTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todos) => todos.text == text
    )
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
  }


  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todos) => todos.text == text
    )
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }





  return (

    <>
      <TodoCounter
        completados={completedTodos}
        total={totalTodos} />
      <TodoSearch
        changes={changes}
        setChanges={setChanges}
      />

      <TodoList>
        {searchTodo.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completosTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      <TodoButton />
    </>





  );
}



export default App;
