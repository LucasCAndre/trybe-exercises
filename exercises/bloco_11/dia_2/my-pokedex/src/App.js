import Pokemon from './pokemon'
import './App.css';
import pokemons from './data'

function App() {
  return (
    <div>
      <h1 className='pokedex'>My Pokedex</h1>
      <div className='divMaster'>
        {pokemons.map((poke) => 
        <Pokemon key={poke.id} pokemon={poke}></Pokemon>
        )}
      </div>
      <footer className='foot'>Developed by Lucas André/2021</footer>
    </div>
  );
}

export default App;
