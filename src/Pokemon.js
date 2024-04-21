import {Link  } from 'react-router-dom';
import classnames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pokemon.css'

export default function Pokemon(pm){
    

    return (
        <>
        <Link className='link' to={"/pokedex/"+pm.name}>
            <div className={classnames('pokecard', pm.types[0].type.name)}>
               <h1>{pm.id+": "+pm.name}</h1>
               <img src={pm.sprites.front_default} alt={pm.name}/>
            </div>
        </Link>
        </>
    )
}