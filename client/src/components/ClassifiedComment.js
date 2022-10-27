import "./ClassifiedStyle/classified.css"

function ClassifiedComments({ comment }) {

    return(
        <li>
            <div className="comment-container">
                <div className="posted-by">
                    {comment.user.name}
                </div>
                <div className="content">
                    {comment.comment}
                </div>
            </div>
            
        </li>
    )
}

export default ClassifiedComments;