
function UserHotdogs({ hotdog, onHotdogDelete, setCurrentHotdog, setToggleAdEdit, setToggleEventEdit, setToggleServiceEdit, setToggleHotdogEdit }) {

    function handleDelete() {
        fetch(`/hotdogs/${hotdog.id}`, {
            method: 'DELETE',
        })
         .then(res => {
            if(res.ok){
                onHotdogDelete(hotdog.id);
                setToggleHotdogEdit(false);
            }else{
                res.json().then(console.log)
            }
         })
    }

    function handleEdit() {
        setCurrentHotdog(hotdog);
        setToggleAdEdit(false);
        setToggleEventEdit(false);
        setToggleServiceEdit(false);
        setToggleHotdogEdit(true);
    }

    return(
        <li>
            {hotdog.title} <button onClick={handleEdit}>edit</button> <button onClick={handleDelete}>delete</button>
        </li>
    )
}
export default UserHotdogs;