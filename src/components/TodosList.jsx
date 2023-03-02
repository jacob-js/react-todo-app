import React from 'react'
import TodoItem from './TodoItem'

function TodosList({todos, deleteTodo, toggleTodoStatus}) {

  return (
    <div className='bg-white p-5 flex flex-col'>
        {todos.map((todo, index) =>(
            <TodoItem {...todo} key={index} deleteTodo={deleteTodo} toggleTodoStatus={toggleTodoStatus} />
        ))}
    </div>
  )
}

export default TodosList