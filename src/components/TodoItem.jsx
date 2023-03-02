import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

function TodoItem({title, done}) {
  return (
    <div className='flex items-center justify-between border-b border-gray-300 last:border-0 py-3'>
        <div className={`flex gap-5 items-center cursor-pointer ${done ? 'line-through opacity-60': ''}`}>
            <input type="checkbox" name="" id="" checked={done} />
            <div className={`font-semibold text-xl`}>{title}</div>
        </div>
        <div className="justify-self-end cursor-pointer text-red-500">
            <AiOutlineClose />
        </div>
    </div>
  )
}

export default TodoItem