import React from 'react';


const ListedReviews = ({reviews, user}) => {

    const usersReview = reviews.find(review => user.id === review.user_id)

    const reviewList = reviews.map((review) => 
    <ul className="listedReview" key={ review.id }>
        <h3>{review.title} - {review.rating} ⭐'s  </h3>
        <br />
        { review.review }
        <br />
        <br />
        by: {review.user.username} {review.date} 
        {usersReview ? <React.Fragment>
            <button>Delete</button>
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

