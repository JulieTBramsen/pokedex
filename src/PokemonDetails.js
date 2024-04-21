import { useState, useEffect } from 'react';
import {Link, Outlet, Route, useParams  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './PokemonDetails.css'


export default function PokemonDetails(){
    const {clickedPokemon} = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
          fetch("https://pokeapi.co/api/v2/pokemon/"+clickedPokemon)
            .then(response => response.json())
            .then((data) => {
                setPokemon(data)
            })
    
    }, []);

    return(
        <>
        <Container>
            <Link to={"/pokedex"}>
            <button>back</button>
            </Link>
            <h1>{pokemon?.id+". "+ pokemon?.name}</h1>
            <Row>
                <Col>
                <p>{"Height: "+(pokemon?.height*10)+"cm."}</p>
                <p>{"Weight: "+ pokemon?.weight+"kg."}</p>
                <p>Types:</p>
                <ul>
                    {pokemon?.types.map((e)=>{
                        return(
                            <li>{e.type.name}</li>
                        )
                    })}
                </ul>
                <p>Abilities:</p>
                <ul>
                    {pokemon?.abilities.map((e)=>{
                        return(
                            <li>{e.ability.name}</li>
                        )
                    })}
                </ul>
                <p>Base stats:</p>
                <ul>
                    {pokemon?.stats.map((e)=>{
                        return(
                            <li>{e.stat.name +": "+ e.base_stat}</li>
                        )
                    })}
                </ul>
                </Col>
                <Col>
                <img src={pokemon?.sprites.front_default} alt={pokemon?.name}/>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}