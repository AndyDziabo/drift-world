
function UserAd({ ad, onAdDelete, setCurrentAd, setToggleAdEdit, setToggleEventEdit, setToggleServiceEdit, setToggleHotdogEdit }) {

    function handleDelete() {
        fetch(`/classifieds/${ad.id}`, {
            method: 'DELETE',
        })
         .then(res => {
            if(res.ok){
                onAdDelete(ad.id);
                setToggleAdEdit(false);
            }else{
                res.json().then(console.log)
            }
         })
    }

    function handleEdit() {
        setCurrentAd(ad);
        setToggleAdEdit(true);
        setToggleEventEdit(false);
        setToggleServiceEdit(false);
        setToggleHotdogEdit(false);
    }

    return(
        <li>
            {ad.title} <button className="button" onClick={handleEdit}>edit</button> <button className="button" onClick={handleDelete}>delete</button>
        </li>
    )
}
export default UserAd;