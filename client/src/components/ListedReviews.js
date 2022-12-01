import React from 'react';


const ListedReviews = ({reviews, user, products, setReviews, onDeleteReview}) => {

    const usersReview = reviews.find(review => user.id === review.user_id)

    const handleDelete = () => {
        fetch(`/reviews/${usersReview.id}`, {
            method: "DELETE"
        })
        .then(r => {
            if (r.ok) {
                const updatedReviews = reviews.filter(review => review.id !== usersReview.id)
                const updatedProduct = products.filter(p => p.id !== products.id)
                setReviews(updatedReviews)
                onDeleteReview(updatedProduct)
            }
        })
    }

    const reviewList = reviews.map((review) => 
    <ul className="listedReview" key={ review.id }>
        <h3>{review.title} - {review.rating} ⭐'s  </h3>
        <br />
        { review.review }
        <br />
        <br />
        by: {review.user.username} {review.date} 
        {usersReview ? <React.Fragment>
            <button onClick={handleDelete}>Delete</button>
            <button>Edit</button>
            </React.Fragment> : (
                null
            )}  
        <br />
        </ul>)

        // console.log(user)

    return ( 
        <ul>
        {reviewList} 
        </ul>
     );
}
 
export default ListedReviews;

// {user ? <React.Fragment>
//     <button>Delete</button>
//     <button>Edit</button>
// </React.Fragment> : (
//     null
// )}

