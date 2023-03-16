import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Title from './components/Title'
import TodoInput from './components/TodoInput'
import TodosList from './components/TodosList'
import Wrapper from './components/Wrapper'

function App() {
  const [showInput, setShowInput] = useState(false)
  const [todos, setTodos] = useState([]);

  const addTodo = (title) =>{
    setTodos(v => [...v, {id: (v.at(-1)?.id ?? 0) + 1, title, done: false}])
  };

  const deleteTodo = (id) =>{
    setTodos(v => v.filter(todo => todo.id !== id))
  };

  const toggleTodoStatus = (id) =>{
    const todo = todos.find(td => td.id === id);
    setTodos(v => [...v.filter(td => td.id !== id), {...todo, done: !todo.done}].sort((a, b) => a.id - b.id))
  };

  const updateTodo = (id, title) =>{
    const todo = todos.find(td => td.id === id);
    setTodos(v => [...v.filter(td => td.id !== id), {...todo, title}].sort((a, b) => a.id - b.id))
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <Wrapper>
        <Title />
        <div className="my-5 relative">
          <AddTodo setShowInput={setShowInput} showInput={showInput} />
          {showInput && <TodoInput setShowInput={setShowInput} addTodo={addTodo} />}
        </div>
        <TodosList todos={todos} deleteTodo={deleteTodo} toggleTodoStatus={toggleTodoStatus} updateTodo={updateTodo} />
      </Wrapper>
    </div>
  )
}

export default App
