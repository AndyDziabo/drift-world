
function UserHotdogs({ hotdog, onHotdogDelete }) {

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

    return(
        <li>
            {hotdog.title} <button>edit</button> <button onClick={handleDelete}>delete</button>
        </li>
    )
}
export default UserHotdogs;