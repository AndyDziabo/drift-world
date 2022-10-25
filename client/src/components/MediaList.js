import { useEffect, useState } from "react";
import MediaCard from "./MediaCard";

function MediaList() {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        fetch("/hotdogs")
            .then((r) => r.json())
            .then(setMedia);
    }, []);
    console.log(media)

    return(
        <div>
            Media List
            <ul>
                {media.map((m) => (
                    <MediaCard key={m.id} m={m} />
                ))}
            </ul>
        </div>
    )
}

export default MediaList