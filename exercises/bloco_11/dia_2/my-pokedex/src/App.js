import Pokemon from './pokemon'
import './App.css';
import pokemons from './data'

function App() {
  return ( 
  <div className='divMaster'>
    <h1>My Pokedex</h1>
    {pokemons.map((poke) => 
    <Pokemon key={poke.id} pokemon={poke}></Pokemon>
    )}
  </div>
  );
}

export default App;
