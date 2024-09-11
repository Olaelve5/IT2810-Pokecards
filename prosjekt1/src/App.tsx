import './App.css'
import { LeftButton, RightButton } from './components/buttons/SideButtons'
import Pokemon from './components/Pokemon'
import Search from './components/Search'
import DataProvider from './providers/DataProvider'

function App() {

  return (
    <>
      <DataProvider>
        <Search />
        <div>
          <LeftButton />
          <Pokemon />
          <RightButton />
        </div>
      </DataProvider>
    </>
  )
}

export default App
