import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Title from './components/Title'
import TodoInput from './components/TodoInput'
import Wrapper from './components/Wrapper'

function App() {
  const [showInput, setShowInput] = useState(false)

  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <Wrapper>
        <Title />
        <div className="my-5 relative">
          {showInput ? <TodoInput setShowInput={setShowInput} />: <AddTodo setShowInput={setShowInput} />}
        </div>
      </Wrapper>
    </div>
  )
}

export default App
