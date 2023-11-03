import React, { useState } from "react";
import GifSearch from "./GifSearch";
import Giflist from "./GifList";

function GifListContainer() {
    const [imgGif, setImgGif] = useState([])
    console.log(imgGif)

    function displaySearch(query) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=buJmbkGyAeaf4MaNGML0IlF2HXggeFzf&rating=g`)
        .then((response) => response.json())
        .then((results) => {
        const displayedResults = [
            results.data[0].images.original.url,
            results.data[1].images.original.url,
            results.data[2].images.original.url
        ] 
            setImgGif(displayedResults)
        })
    }

    return (
        <div>
            <GifSearch displaySearch={displaySearch}/>
            <Giflist props={imgGif}/>
        </div>
    )


}

export default GifListContainer;