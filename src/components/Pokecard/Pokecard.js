import React from "react";


const Pokecard = ({no, pokemon, pokemonImage, type}) => {
    return(
        <div className= "tc">
            <div >
                    <div className='dib br3 pa4 ma5 shadow-5 tc bg-white'>
                        <h2 className="f2 ttu">{pokemon.name}</h2>              
                     <img width="200px" height="200px" src={pokemonImage} alt='bulbasor'></img> 
                     <h3 className="f3">Index No. {Number(no)+1}</h3> 
                    </div>
            </div>
        </div>
    )}

export default Pokecard;