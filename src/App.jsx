import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-10 bg-green-500 h-96">
        <h1 className="text-3xl font-bold underline text-white text-center">
          Hello world!
        </h1>
      </div>
    </>
  )
}

export default App
