import React, { useState } from "react";

function UserHotdogsEdit({ currentHotdog, setToggleHotdogEdit }) {
    const [title, setTitle] = useState(currentHotdog.title);
    const [description, setDescription] = useState(currentHotdog.description);
    const [image, setImage] = useState(currentHotdog.image);
    const [errors, setErrors] = useState([]);
    const [toggleSuccess, setToggleSuccess] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/hotdogs/${currentHotdog.id}`, {
            method: "PATCH",
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
                setToggleSuccess(true);
                setTimeout(function(){
                    setToggleHotdogEdit(false);
                },2400);
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    function handleCancel() {
        setToggleHotdogEdit(false);
    }

    return(
        <div>
            Edit Hotdog Form <button onClick={handleCancel}>Cancel</button>
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

export default UserHotdogsEdit;