import React from 'react';
import PokeCardMaker from '../PokeCardMaker/PokeCardMaker';


const PokeCardList = ({allPokemon, pokemonImage, clickedpoke}) => {
    return (
            <div>
                        {allPokemon.map((user, i) => {
                            return(
                            <PokeCardMaker
                            clickedpoke = {clickedpoke}
                            pokemon = {allPokemon[i].name}
                            pokemonPic = {pokemonImage[i].sprites.front_default}
                            no = {i+1}
                            key = {i}
                             />)
                        })}
                        
                    

            </div>
            );
}

export default PokeCardList;