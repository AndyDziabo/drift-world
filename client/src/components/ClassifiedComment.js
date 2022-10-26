
function ClassifiedComments({ comment }) {

    return(
        <li>
            <div>
                <div>
                    {comment.comment}
                </div>
                <div>
                    posted by: {comment.user.name}
                </div>
            </div>
            
        </li>
    )
}

export default ClassifiedComments;