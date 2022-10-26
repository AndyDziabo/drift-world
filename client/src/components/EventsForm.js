import React, { useState } from "react";
import DateTimePicker from 'react-datetime-picker';

function EventsForm({ setShowEvent }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [entryFee, setEntryFee] = useState();
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name, date, location, entryFee, description, image)
        fetch("/events", {
            method: "POST",
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
                setShowEvent(false);
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }


    return(
        <div>
            Events Form {errors ? errors : null}
            <div>
                <label htmlFor="date">Date</label><DateTimePicker onChange={setDate} value={date} />
            </div>
            
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
        </div>
    )
}

export default EventsForm