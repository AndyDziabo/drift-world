import { useEffect, useState } from "react";
import ClassifiedComments from "./ClassifiedComment";
import "./ClassifiedStyle/classified.css"

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
        <div>
            <div className="ad-top">
                <div className="ad-title">
                    <h2>{classified.title}</h2>
                    <button onClick={handleClick}>All Ads</button>
                    <div>Posted by: {classified.user.name}</div>
                    <div>Price: ${classified.price}</div>
                    <div>Location: {classified.location}</div>
                </div>
            </div>
            <div className="ad-bottom">
                <div className="ad-image">
                    <img src={classified.image} />
                </div>
                <div className="ad-description">
                    <div className="ad-description-title">Description:</div>
                    {classified.description}
                </div>
            </div>
            <div className="comments">
                Comments
                <div className="comment-section">
                    <ul>
                        {comments.map((comment) => (<ClassifiedComments key={comment.id} comment={comment} />))}
                    </ul>
                </div>
                <div className="make-comment">
                    <form onSubmit={handleSubmit}>
                        <table>
                            <tr>
                                <textarea
                                    rows="5"
                                    cols="100"
                                    id="comment"
                                    autoComplete="off"
                                    name="comment"
                                />
                            </tr>
                            <tr>
                                <input type="submit" value="Submit" />
                            </tr>
                        
                        </table>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ClassifiedCard;