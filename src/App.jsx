import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-blue-500 size-90px'>
      <div>
         <h1>verify your age</h1>
         <p>please conform your </p>
         <input type="text"capture placeholder='Enter your birth year'/>
         <br />
         <button className='bg-blue-200'>continue</button>
       </div>
    </div>
    </>
  )
}

export default App
