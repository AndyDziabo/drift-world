import React from 'react';
import ReactPlayer from 'react-player';

function MediaCard({ m }) {

    return(
        <li>
            <h2>{m.title}</h2>
            <ReactPlayer url={m.image} />
            <p>Description: {m.description}</p>
            <p>posted by: {m.user.name}</p>
        </li>
    )
}

export default MediaCard;