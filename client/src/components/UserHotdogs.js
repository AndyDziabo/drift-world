
function UserHotdogs({ hotdog, onHotdogDelete, setCurrentHotdog, setToggleHotdogEdit }) {

    function handleDelete() {
        fetch(`/hotdogs/${hotdog.id}`, {
            method: 'DELETE',
        })
         .then(res => {
            if(res.ok){
                onHotdogDelete(hotdog.id)
            }else{
                res.json().then(console.log)
            }
         })
    }

    function handleEdit() {
        setCurrentHotdog(hotdog);
        setToggleHotdogEdit(true);
    }

    return(
        <li>
            {hotdog.title} <button onClick={handleEdit}>edit</button> <button onClick={handleDelete}>delete</button>
        </li>
    )
}
export default UserHotdogs;