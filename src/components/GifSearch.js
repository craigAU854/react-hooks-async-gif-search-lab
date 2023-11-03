import React, { useState } from "react";

function GifSearch({ displaySearch }) {
    const [query, setQuery] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        displaySearch(query)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default GifSearch;