import React from 'react';
import './pokecard.scss';

interface PokeCardProps {
    pokemon: any;
}


export const PokeCard = ({pokemon}:PokeCardProps) => {
    return (
        
        <div className='pokecard'>
            <div className="box">
                <h1 className='capitalize'>{pokemon.name}</h1>
                <hr/>
                <img src={pokemon.sprite} alt="Pikachu" />
                <hr/>
                <div className='ul-box'>
                    <span>Abilities:</span>
                    <ul>
                        {pokemon.abilities.map((abilty: any) => (
                            <li key={abilty}>{abilty}</li>
                        ))} 
                    </ul>
                </div>
                <hr/>
                <div className='ul-box'>
                <span>Types</span>
                    <ul>
                        {pokemon.types.map((type: any) => (
                            <li key={type}>{type}</li>
                        ))} 
                    </ul>
                </div>
                
                
            </div>
        </div>
        ) 

}