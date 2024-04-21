
import { useEffect, useState } from 'react';
import Pokemon from './Pokemon'

import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PokedexHome.css'

function PokedexHome() {

  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(1);
  const [maxPage, setMaxpage] = useState(1);
  
  
  useEffect(() => {
    for (let i = pokemons.length+1; i<pokemons.length+10; i++  ){
      console.log("fetching pokemon for i = "+i)
      fetch("https://pokeapi.co/api/v2/pokemon/"+i)
        .then(response => response.json())
        .then((data) => {
            setPokemons(pokemons =>[...pokemons, data] )
        })
    }
    console.log(pokemons)

}, [maxPage]);

  return (
     <Container>
      <h1>Pokedex</h1>
      {console.log(offset*9-9)}
      <Row className='show-grid'>
        {pokemons.slice(((offset*9)-9),(offset*9)).map((pokemon) =>{
        return(
          <Col md={4}>
              <Pokemon name ={pokemon.name} id={pokemon.id} sprites={pokemon.sprites} types={pokemon.types}/>
          </Col>
        );
      })}
      </Row>
        <h1 className='centerHeader'>{offset*9-8+" - "+(offset*9)}</h1>
        <div className='centerDiv'>
          <button disabled={offset<=1} onClick={() => prevClicked()}>Previous</button>
          <button onClick={() => nextClicked()}>Next</button>
        </div>
        
      
    </Container>
   
    
  )

     
   
  function nextClicked(){
    setOffset(offset + 1);
    if(offset>=maxPage){
      setMaxpage(maxPage+1)
    }
  }
  function prevClicked(){
    setOffset(offset -1);
    if(offset<1){
      setOffset(1);
    }
  }
}


export default PokedexHome;