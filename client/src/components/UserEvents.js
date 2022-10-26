
function UserEvents({ event, onEventDelete, setCurrentEvent, setToggleAdEdit, setToggleEventEdit, setToggleServiceEdit, setToggleHotdogEdit }) {

    function handleDelete() {
        fetch(`/events/${event.id}`, {
            method: 'DELETE',
        })
         .then(res => {
            if(res.ok){
                onEventDelete(event.id);
                setToggleEventEdit(false);
            }else{
                res.json().then(console.log)
            }
         })
    }

    function handleEdit() {
        setCurrentEvent(event);
        setToggleAdEdit(false);
        setToggleEventEdit(true);
        setToggleServiceEdit(false);
        setToggleHotdogEdit(false);
    }

    return(
        <li>
            {event.name} <button onClick={handleEdit}>edit</button> <button onClick={handleDelete}>delete</button>
        </li>
    )
}
export default UserEvents;