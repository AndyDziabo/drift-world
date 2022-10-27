import React, { useState } from "react";
import "./ClassifiedStyle/classified.css"

function ClassifiedsForm({ setShowAd, user }) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/classifieds", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                price: price,
                location: location,
                description: description,
                image: image,
                category: e.target.category.value,
            }),
        }).then((r) => {
            if(r.ok){
                setShowAd(false);
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return(
        <div>
            <div className="form-title">
                <h3>Classifieds Form</h3>
            </div>
            <form className="form" onSubmit={handleSubmit}>
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
                        <td className="submit">
                            <input type="submit" value="Submit" />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default ClassifiedsForm