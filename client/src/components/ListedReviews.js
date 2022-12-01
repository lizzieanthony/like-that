import React, {useState} from 'react';


const ListedReviews = ({reviews, user, products, setReviews, onDeleteReview}) => {
    const [rateProduct, setRateProduct] = useState(0)
    const [newReview, setNewReview] = useState("")

    const usersReview = user ? reviews.find(review => user.id === review.user_id) : undefined

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

    const handleUpdate = () => {
        const addReview = {review: newReview, rating: rateProduct}
        fetch(`/reviews/${usersReview.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(addReview)
        })
        .then(r => r.json())
        .then(newReview => {
            const updatedReview = reviews.map(review => review.id === newReview.id ? newReview : review)
            setReviews(updatedReview)
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
        // console.log(reviews)


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

