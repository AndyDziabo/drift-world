
function ClassifiedThumb({ classified, setToggle, setAd }) {

    function handleClick() {
        setAd(classified);
        setToggle(false);
    }
    return(
        <li>
            <div className="thumb-main">
                <div className="thumb-image" onClick={handleClick}>
                    <img src={classified.image} />
                </div>
                <div className="thumb-info">
                    <h3>{classified.title}</h3>
                    <div>{classified.price}</div>
                    <div>{classified.location}</div>
                </div>
            </div>
        </li>
    )
}

export default ClassifiedThumb;