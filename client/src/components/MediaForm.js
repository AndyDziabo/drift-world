import React, { useState } from "react";

function MediaForm({ setShowMedia }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(title, description, image)
        fetch("/hotdogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                description: description,
                image: image,
            }),
        }).then((r) => {
            if(r.ok){
                setShowMedia(false);
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return(
        <div>
            <div className="form-title">
                <h3>Media Form</h3>
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
                        <td className="submit">
                            <input type="submit" value="Submit" />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default MediaForm