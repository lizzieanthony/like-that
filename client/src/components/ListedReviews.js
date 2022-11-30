const ListedReviews = ({reviews}) => {

    const reviewLis = reviews.map((review) => 
    <ul className="listedReview" key={ review.id }>
        <h3>{review.title} - {review.rating} ⭐'s  </h3>
        <br />
        { review.review }
        <br />
        <br />
        by: {review.user.username}
        </ul>)

    return ( 
        <ul>
        {reviewLis} 
        </ul>
     );
}
 
export default ListedReviews;

// {review.created_at} 