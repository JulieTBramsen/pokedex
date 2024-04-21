
import {Route, Routes} from 'react-router-dom';

import PokemonDetails from './PokemonDetails';
import PokedexHome from './PokedexHome';

function App() {
    
return(
    <Routes>
          <Route exact path="/" element={<PokedexHome/>} />
          <Route exact path="/pokedex" element={<PokedexHome/>} />
          <Route path="/:clickedPokemon" element={<PokemonDetails/>} />
          <Route path="/pokedex/:clickedPokemon" element={<PokemonDetails/>} />
    </Routes>
)
  }
  
  export default App;