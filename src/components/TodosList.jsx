import React from 'react'
import TodoItem from './TodoItem'

function TodosList() {
    const todos = [
        {title: "Lorem Ipsum", done: true},
        {title: "Lorem Ipsum", done: false}
    ]
  return (
    <div className='bg-white p-5 flex flex-col'>
        {todos.map((todo, index) =>(
            <TodoItem {...todo} key={index} />
        ))}
    </div>
  )
}

export default TodosList