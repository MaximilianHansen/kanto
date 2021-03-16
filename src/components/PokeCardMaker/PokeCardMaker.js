import React from "react";
import './PokeCardMaker.css';

const PokeCardMaker = ({pokemon, pokemonPic, no, clickedpoke}) => {
    return(
                    <div id={Number(no)-1} className='dib br3 pa3 ma3 grow shadow-5 bg-white' onClick={clickedpoke}>
                        <h2 className="f5 ttu npe">{pokemon}</h2>             
                        <img className="npe" width="100px" height="100px" src={pokemonPic} alt=''></img>
                        <h3 className=" npe f5">No. {no}</h3>
                        
                    </div>

                
         
    )}

export default PokeCardMaker;