import "./ClassifiedStyle/classified.css"

function ClassifiedThumb({ classified, setToggle, setAd }) {

    function handleClick() {
        setAd(classified);
        setToggle(false);
    }
    return(
        <li className="ads-list-thumbs">
            <div className="thumb-main" onClick={handleClick}>
                <div className="thumb-image" >
                    <img src={classified.image} />
                </div>
                <div className="thumb-info">
                    <h3>{classified.title}</h3>
                    <div>Price: ${classified.price}</div>
                    <div>Location: {classified.location}</div>
                </div>
            </div>
        </li>
    )
}

export default ClassifiedThumb;