import { LeftButton, RightButton } from './components/buttons/SideButtons';
import PokemonCard from './components/PokemonCard';
import DataProvider from './providers/DataProvider';
import Logo from './components/Header';
import MainTable from './components/table/MainTable';

function App() {
  return (
    <>
      <Logo />
      <DataProvider>
        <div className='pageContent'>
          <div className="mainPokemonContainer">
            <LeftButton />
            <PokemonCard />
            <RightButton />
          </div>
          <MainTable />
        </div>
      </DataProvider>
    </>
  );
}

export default App;
