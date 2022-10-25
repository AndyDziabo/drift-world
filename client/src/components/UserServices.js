
function UserServices({ service, onServiceDelete }) {

    function handleDelete() {
        fetch(`/services/${service.id}`, {
            method: 'DELETE',
        })
         .then(res => {
            if(res.ok){
                onServiceDelete(service.id)
            }else{
                res.json().then(console.log)
            }
         })
    }

    return(
        <li>
            {service.title} <button>edit</button> <button onClick={handleDelete}>delete</button>
        </li>
    )
}
export default UserServices;