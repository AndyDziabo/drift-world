import React from 'react';
import ReactPlayer from 'react-player';

function MediaCard({ m }) {
    console.log(m)
    return(
        <li>
            <h2>{m.title}</h2>
            <p>{m.description}</p>
            <ReactPlayer url={m.image} />
            <p>posted by: {m.user.name}</p>
        </li>
    )
}

export default MediaCard;