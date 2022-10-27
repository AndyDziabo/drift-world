import React, { useState } from "react";

function UserAdEdit({ currentAd,  setToggleAdEdit  }) {
    const [title, setTitle] = useState(currentAd.title);
    const [price, setPrice] = useState(currentAd.price);
    const [location, setLocation] = useState(currentAd.location);
    const [description, setDescription] = useState(currentAd.description);
    const [image, setImage] = useState(currentAd.image);
    const [category, setCategory] = useState(currentAd.category);
    const [errors, setErrors] = useState([]);
    const [toggleSuccess, setToggleSuccess] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/classifieds/${currentAd.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                price: price,
                location: location,
                description: description,
                image: image,
                category: category,
            }),
        }).then((r) => {
            if(r.ok){
                setToggleSuccess(true);
                setTimeout(function(){
                    setToggleAdEdit(false);
                },2400);
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    function handleVehicle() {
        setCategory(true);
    }

    function handleParts() {
        setCategory(false);
    }

    function handleCancel() {
        setToggleAdEdit(false);
    }

    return(
        <div className="user-edit">
            <div className="user-edit-title">
                <h3>Edit Classified</h3>
                <button className="button" onClick={handleCancel}>Cancel</button>
            </div>
            
            {toggleSuccess ? "success" 
            : 
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>
                            <label>Ad Type</label>
                        </td>
                        <td>
                            <label><input type="radio" value="true" checked={category} onChange={handleVehicle} />Vehicle</label>
                            <label><input type="radio" value="false" checked={!category} onChange={handleParts} />Parts</label>
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
                            <td className="submit">
                                <input type="submit" value="Submit" />
                            </td>
                        </td>
                    </tr>
                </table>
            </form>
            }
        </div>
    )
}
export default UserAdEdit;