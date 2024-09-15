import './App.css';
import { LeftButton, RightButton } from './components/buttons/SideButtons';
import PokemonCard from './components/PokemonCard';
import Search from './components/Search';
import DataProvider from './providers/DataProvider';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <Logo />
      <DataProvider>
        <Search />
        <div className="mainPokemonContainer">
          <LeftButton />
          <PokemonCard />
          <RightButton />
        </div>
      </DataProvider>
    </>
  );
}

export default App;
