
function ClassifiedComments({ comment }) {
console.log(comment)
    return(
        <li>
            <div>
                <div>
                    {comment.comment}
                </div>
                <div>
                    {comment.user.name}
                </div>
            </div>
            
        </li>
    )
}

export default ClassifiedComments;