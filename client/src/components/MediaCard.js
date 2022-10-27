import React from 'react';
import ReactPlayer from 'react-player';

function MediaCard({ m }) {

    return(
        <li className='hotdog-li'>
            <h2>{m.title}</h2>
            <div className='posted-by'>Posted by: {m.user.name}</div>
            <ReactPlayer url={m.image} />
            <div className='hotdog-description'>
                <div className='hotdog-description-title'>Description: </div>
                {m.description}
            </div>
            
            
        </li>
    )
}

export default MediaCard;