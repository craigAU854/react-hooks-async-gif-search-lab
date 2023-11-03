import React from "react";

function Giflist({ props }) {

    const gifs = props.map((gif, index) => 
        <li key={'gif'+index}>
            <img src={gif} alt="gif"/>
        </li>
    )
    return (
        <div>
            <ul>
                {gifs}
            </ul>
        </div>
    )
}

export default Giflist;