import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflow: 'scroll', width:'70vw', height: '70vh'}}>
            {props.children}
            </div>
    )
}
export default Scroll;