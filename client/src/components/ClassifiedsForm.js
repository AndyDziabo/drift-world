import React, { useState } from "react";

function ClassifiedsForm() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(title, price, location, description, image, e.target.category.value)
    }

    return(
        <div>
            ClassifiedsForm
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>
                            <label>Ad Type</label>
                        </td>
                        <td>
                            <label><input type="radio" value="true" name="category" />Vehicle</label>
                            <label><input type="radio" value="false" name="category" />Parts</label>
                        </td>
                    </tr>
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
                            <label htmlFor="price">Price</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="price"
                                autoComplete="off"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
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

export default ClassifiedsForm