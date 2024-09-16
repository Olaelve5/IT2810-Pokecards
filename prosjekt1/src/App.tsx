import './App.css';
import { LeftButton, RightButton } from './components/buttons/SideButtons';
import PokemonCard from './components/PokemonCard';
import DataProvider from './providers/DataProvider';
import Logo from './components/Logo';
import MainTable from './components/table/MainTable';

function App() {
  return (
    <>
      <Logo />
      <DataProvider>
        <div className="mainPokemonContainer">
          <LeftButton />
          <PokemonCard />
          <RightButton />
        </div>
        <MainTable />
      </DataProvider>
    </>
  );
}

export default App;
