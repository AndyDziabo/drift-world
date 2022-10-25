import React, { useState } from "react";

function UserEventsEdit({ currentEvent, setToggleEventEdit }) {
    const [name, setName] = useState(currentEvent.name);
    const [date, setDate] = useState(currentEvent.date);
    const [location, setLocation] = useState(currentEvent.location);
    const [entryFee, setEntryFee] = useState(currentEvent.entry_fee);
    const [description, setDescription] = useState(currentEvent.description);
    const [image, setImage] = useState(currentEvent.image);
    const [errors, setErrors] = useState([]);
    const [toggleSuccess, setToggleSuccess] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name, date, location, entryFee, description, image)
        fetch(`/events/${currentEvent.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                date: date,
                location: location,
                entry_fee: entryFee,
                description: description,
                image: image,
            }),
        }).then((r) => {
            if(r.ok){
                setToggleSuccess(true);
                setTimeout(function(){
                    setToggleEventEdit(false);
                },2400);
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    function handleCancel() {
        setToggleEventEdit(false);
    }

    return(
        <div>
            Edit Events Form  <button onClick={handleCancel}>Cancel</button>
            {toggleSuccess ? "success" 
            : 
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>
                            <label htmlFor="name">Name</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="name"
                                autoComplete="off"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="date">Date</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="date"
                                autoComplete="off"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="location">Location</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="location"
                                autoComplete="off"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="entryFee">EntryFee</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="entryFee"
                                autoComplete="off"
                                value={entryFee}
                                onChange={(e) => setEntryFee(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="description">Description</label>
                        </td>
                        <td>
                            <textarea
                                rows="5"
                                cols="50"
                                id="description"
                                autoComplete="off"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="image">Image</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="image"
                                autoComplete="off"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />  
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" value="Submit" />
                        </td>
                    </tr>
                </table>
            </form>
            }
        </div>
    )
}

export default UserEventsEdit;