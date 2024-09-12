import './App.css'
import { LeftButton, RightButton } from './components/buttons/SideButtons'
import PokemonCard from './components/PokemonCard'
import Search from './components/Search'
import DataProvider from './providers/DataProvider'
import MainTable from './components/table/MainTable'

function App() {

  return (
    <>
      <DataProvider>
        <Search />
        <div className='mainPokemonContainer'>
          <LeftButton />
          <PokemonCard />
          <RightButton />
        </div>
        <MainTable />
      </DataProvider>
    </>
  )
}

export default App
