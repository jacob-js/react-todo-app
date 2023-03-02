import React from 'react'

function TodoInput({setShowInput}) {
  return (
    <div className="w-full absolute inset-0">
      <input type="text" placeholder='Type in something...' className="w-full bg-white py-4 px-6 outline-0 text-gray-600 font-semibold animate-grow" autoFocus onBlur={() =>setShowInput(false)} />
    </div>
  )
}

export default TodoInput