import React from "react";
import './AllPokemonButton.css'

const AllPokemonButton = ({buttonclick}) => {
    return(
        <div className="buttonholder grow mt5">
            <button onClick={buttonclick} className="f6 link dim ba bw1 ph3 pv2 mb2 black pointer">View All Pokemon</button>
        </div>
    )}

export default AllPokemonButton;