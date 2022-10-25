
function UserServices({ service, onServiceDelete, setCurrentService, setToggleServiceEdit }) {

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

    function handleEdit() {
        setCurrentService(service);
        setToggleServiceEdit(true);
    }

    return(
        <li>
            {service.title} <button onClick={handleEdit}>edit</button> <button onClick={handleDelete}>delete</button>
        </li>
    )
}
export default UserServices;