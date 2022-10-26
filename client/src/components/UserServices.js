
function UserServices({ service, onServiceDelete, setCurrentService, setToggleAdEdit, setToggleEventEdit, setToggleServiceEdit, setToggleHotdogEdit }) {

    function handleDelete() {
        fetch(`/services/${service.id}`, {
            method: 'DELETE',
        })
         .then(res => {
            if(res.ok){
                onServiceDelete(service.id);
                setToggleServiceEdit(false);
            }else{
                res.json().then(console.log)
            }
         })
    }

    function handleEdit() {
        setCurrentService(service);
        setToggleAdEdit(false);
        setToggleEventEdit(false);
        setToggleServiceEdit(true);
        setToggleHotdogEdit(false);
    }

    return(
        <li>
            {service.title} <button onClick={handleEdit}>edit</button> <button onClick={handleDelete}>delete</button>
        </li>
    )
}
export default UserServices;