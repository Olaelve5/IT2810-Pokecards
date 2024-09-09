import { useState } from 'react'
import './App.css'
import Pokemon from './components/Pokemon'
import Search from './components/Search'

function App() {
  const [name, setName] = useState<string>('ditto')

  return (
    <>
      <Search setName={setName}/>
      <Pokemon name={name}/>
    </>
  )
}

export default App
