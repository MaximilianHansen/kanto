import React from "react";


const StatsList = ({no , type, weight, height}) => {
    return(
        <div className= "tc">
            <div >
                    <div className='dib br3 pa4 ma5 grow shadow-5 tc bg-white'>
                        <h2 className="f2 ttu">STATS</h2>

                        <h3 className="f5 tl ttu " >Index No. : {no}</h3>
                        <h3 className="f5 tl ttu lh-copy">Type : {type}</h3>
                        <h3 className="f5 tl ttu lh-copy">Weight : {weight} Pounds</h3>
                        <h3 className="f5 tl ttu lh-copy">Height : {height} Feet</h3>
                    </div>
            </div>
        </div>
    )}

export default StatsList;