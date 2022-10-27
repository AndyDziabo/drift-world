import React, { useState } from "react";

function ServicesForm({ setShowService }) {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(title, location, description, image)
        fetch("/services", {
            method: "POST",
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
                setShowService(false);
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return(
        <div>
            <div className="form-title">
                Services Form
            </div>
            
            <form className="form" onSubmit={handleSubmit}>
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
        </div>
    )
}

export default ServicesForm