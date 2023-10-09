import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoButton } from './components/TodoButton';



const defaultTodos = [
  { text: 'limpiar ', completed: true },
  { text: 'cocinar ', completed: false },
  { text: 'lavar ', completed: true },
  { text: 'practicar ', completed: false },

]


function App() {
  return (

    <>
      <TodoCounter total={6} completados={2} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <TodoButton />
    </>

  );
}






export default App;
