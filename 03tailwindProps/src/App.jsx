import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-2.5'>Tailwind Test</h1>
      <Card name="Shubham"/>
      <Card name ="Delba"/>
    </>
  )
}

export default App
