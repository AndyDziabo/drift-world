import { useEffect, useState } from "react";
import ClassifiedCard from "./ClassifiedCard";

function ClassifiedsList() {
    const [classifieds, setClassifieds] = useState([]);

    useEffect(() => {
        fetch("/classifieds")
            .then((r) => r.json())
            .then(setClassifieds);
    }, []);

    return(
        <div>
            ClassifiedsList
            <ul>
                {classifieds.map((classified) => (
                    <ClassifiedCard key={classified.id} classified={classified} />
                ))}
            </ul>
        </div>
    )
}

export default ClassifiedsList