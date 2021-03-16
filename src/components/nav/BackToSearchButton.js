import React from "react";
import './AllPokemonButton.css'

const BackToSearchButton = ({buttonclick}) => {
    return(
        <div className="buttonholder grow ma3">
            <button onClick={buttonclick} className="f6 link dim ba bw1 ph3 pv2 mb2 black pointer">View Pokemon Stats</button>
        </div>
    )}

export default BackToSearchButton;