import { useState } from 'react'
import Title from './components/Title'
import Wrapper from './components/Wrapper'

function App() {

  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <Wrapper>
        <Title />
      </Wrapper>
    </div>
  )
}

export default App
