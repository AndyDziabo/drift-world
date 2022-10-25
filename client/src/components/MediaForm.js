import React, { useState } from "react";

function MediaForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(title, description, image)
    }

    return(
        <div>
            Media Form
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

export default MediaForm