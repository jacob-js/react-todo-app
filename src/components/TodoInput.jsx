import React, { useState } from 'react'

function TodoInput({setShowInput, addTodo}) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) =>{
    if(e.key === "Enter" && title){
      addTodo(title);
      setTitle('')
    }
  }

  return (
    <div className="w-full absolute inset-0">
      <input type="text" placeholder='Type in something...' value={title} className="w-full bg-white py-4 px-6 outline-0 text-gray-600 font-semibold animate-grow" autoFocus onBlur={() =>!title && setShowInput(false)} onChange={e => setTitle(e.target.value)} onKeyDown={handleSubmit} />
    </div>
  )
}

export default TodoInput