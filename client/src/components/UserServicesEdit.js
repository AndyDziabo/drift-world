import React, { useState } from "react";

function UserServicesEdit({ currentService, setToggleServiceEdit }) {
    const [title, setTitle] = useState(currentService.title);
    const [location, setLocation] = useState(currentService.location);
    const [description, setDescription] = useState(currentService.description);
    const [image, setImage] = useState(currentService.image);
    const [errors, setErrors] = useState([]);
    const [toggleSuccess, setToggleSuccess] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/services/${currentService.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                location: location,
                description: description,
                image: image,
            }),
        }).then((r) => {
            if(r.ok){
                setToggleSuccess(true);
                setTimeout(function(){
                    setToggleServiceEdit(false);
                },2400);
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    function handleCancel() {
        setToggleServiceEdit(false);
    }

    return(
        <div>
            Edit Services Form <button onClick={handleCancel}>Cancel</button>
            {toggleSuccess ? "success" 
            :
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>
                            <label htmlFor="title">Title</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="title"
                                autoComplete="off"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
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

export default UserServicesEdit;