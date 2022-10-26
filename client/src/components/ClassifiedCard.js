import { useEffect, useState } from "react";
import ClassifiedComments from "./ClassifiedComment";

function ClassifiedCard({ classified, setToggle }) {
    const [comments, setComments] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetch(`/classifieds/${classified.id}`)
            .then((r) => r.json())
            .then(data => setComments(data));
    }, []);

    function handleClick() {
        setToggle(true);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.comment.value)
        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: e.target.comment.value,
                classified_id: classified.id,
            }),
        }).then((r) => {
            if(r.ok){
                r.json().then((com) => setComments([...comments, com]));
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }


    return(
        <li>
            <div className="ad-top">
                <div className="ad-title">
                    <h2>{classified.title}</h2>
                    <div>Price: ${classified.price}</div>
                    <div>Location: {classified.location}</div>
                </div>
                <div className="ad-btn">
                    posted by: {classified.user.name}
                    <button onClick={handleClick}>All Ads</button>
                </div>
            </div>
            <div className="ad-bottom">
                <div className="ad-image">
                    <img src={classified.image} />
                </div>
                <div className="ad-description">
                    <div>Description:</div>
                    {classified.description}
                </div>
            </div>
            <div>
                Comments
                <div>
                    <ul>
                        {comments.map((comment) => (<ClassifiedComments key={comment.id} comment={comment} />))}
                    </ul>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            rows="5"
                            cols="50"
                            id="comment"
                            autoComplete="off"
                            name="comment"
                        />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </li>
    )
}

export default ClassifiedCard;