import { useEffect, useState } from "react";
import MediaCard from "./MediaCard";

function MediaList() {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        fetch("/hotdogs")
            .then((r) => r.json())
            .then(setMedia);
    }, []);


    return(
        <div className="main-hotdogs-list">
            <div className="hotdog-type">
                Media List
            </div>
            
            <ul className="main-list-ul">
                {media.map((m) => (
                    <MediaCard key={m.id} m={m} />
                ))}
            </ul>
        </div>
    )
}

export default MediaList