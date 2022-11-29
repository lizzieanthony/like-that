const ListedReviews = ({reviews}) => {

    const reviewLis = reviews.map((review) => 
    <li key={ review.id }>
        {review.title} {review.rating}/5 
        <br />
        { review.review }
        <br />
        {review.created_at}  {review.user.username}
        </li>)

    return ( 
        <ul>
        {reviewLis} 
        </ul>
     );
}
 
export default ListedReviews;