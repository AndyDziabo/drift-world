
function UserEvents({ event, onEventDelete, setCurrentEvent, setToggleEventEdit }) {

    function handleDelete() {
        fetch(`/events/${event.id}`, {
            method: 'DELETE',
        })
         .then(res => {
            if(res.ok){
                onEventDelete(event.id)
            }else{
                res.json().then(console.log)
            }
         })
    }

    function handleEdit() {
        setCurrentEvent(event);
        setToggleEventEdit(true);
    }

    return(
        <li>
            {event.name} <button onClick={handleEdit}>edit</button> <button onClick={handleDelete}>delete</button>
        </li>
    )
}
export default UserEvents;