import React from "react";


const Pokecard = ({no, pokemon, pokemonImage, type}) => {
    return(
        <div className= "tc">
            <div >
                    <div className='dib br3 pa4 ma5 grow shadow-5 tc bg-white'>
                        <h2 className="f2 ttu">{pokemon.name}</h2>
                        <h3 className="f3">Index No. {no}</h3>
                        <img width="200px" height="200px" src={pokemonImage} alt='bulbasor'></img>
                        <h3 className="f3 ttu">Type : {type}</h3>
                    </div>
            </div>
        </div>
    )}

export default Pokecard;