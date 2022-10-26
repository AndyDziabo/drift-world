import { useEffect, useState } from "react";
import ClassifiedCard from "./ClassifiedCard";
import ClassifiedThumb from "./ClassifiedThumb";

function ClassifiedsList() {
    const [classifieds, setClassifieds] = useState([]);
    const [selectedAds, setSelectedAds] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [ad, setAd] = useState();

    useEffect(() => {
        fetch("/classifieds")
            .then((r) => r.json())
            .then(data => {
                setClassifieds(data)
                setSelectedAds(data)
            });
    }, []);

    function handleSelect(e) {
        if(e.target.value === "all"){
            setSelectedAds(classifieds)
        }else if(e.target.value === "vehicles"){
            const items = classifieds.filter((ad) => {
                if(ad.category == true) return true;
            });
            setSelectedAds(items)
        }else if(e.target.value === "parts"){
            const items = classifieds.filter((ad) => {
                if(ad.category == false) return true;
            });
            setSelectedAds(items)
        }
    }

    return(
        <div>
            ClassifiedsList
            <select onChange={handleSelect}>
                <option value="all">All Ads</option>
                <option value="vehicles">Vehicles</option>
                <option value="parts">Parts</option>
            </select>
            {toggle ?
            <ul>
                {selectedAds.map((classified) => (
                    <ClassifiedThumb key={classified.id} classified={classified} setToggle={setToggle} setAd={setAd} />
                ))}
            </ul>
            :
            <ul>
                <ClassifiedCard classified={ad} setToggle={setToggle} />
            </ul>
            }
        </div>
    )
}

export default ClassifiedsList