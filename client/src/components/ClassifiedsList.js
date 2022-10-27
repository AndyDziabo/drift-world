import { useEffect, useState } from "react";
import ClassifiedCard from "./ClassifiedCard";
import ClassifiedThumb from "./ClassifiedThumb";
import "./ClassifiedStyle/classified.css"

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
        <div className="main-list">
            <div>
                <div className="ad-type">
                    Select Ad Type
                </div>
                <div className="ads-select">
                    <select onChange={handleSelect}>
                        <option value="all">All Ads</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="parts">Parts</option>
                    </select>
                </div>
            </div>
            
            {toggle ?
            <ul className="main-list-ul">
                {selectedAds.map((classified) => (
                    <ClassifiedThumb key={classified.id} classified={classified} setToggle={setToggle} setAd={setAd} />
                ))}
            </ul>
            :
            <ul className="main-list-ul">
                <ClassifiedCard classified={ad} setToggle={setToggle} />
            </ul>
            }
        </div>
    )
}

export default ClassifiedsList