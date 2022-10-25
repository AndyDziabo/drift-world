
function UserEvents({ event, onEventDelete }) {

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

    return(
        <li>
            {event.name} <button>edit</button> <button onClick={handleDelete}>delete</button>
        </li>
    )
}
export default UserEvents;