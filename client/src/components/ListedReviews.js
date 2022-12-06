import React, { useRef, useState} from 'react';
import NewReview from './NewReview';


const ListedReviews = ({product, addReview, reviews, user, products, setReviews, editReview, onDeleteReview}) => {
    const [showForm, setShowForm] = useState(false)
    const [rating, setRating] = useState('')
    const [title, setTitle] = useState('')
    const [updatedReview, setUpdatedReview] = useState('')
    const numbersArray = [...Array(5).keys()]
    const [errors, setErrors] = useState([]);
    const ref = useRef(null);

    console.log(product)
    const usersReview = user ? reviews?.find(review => user.id === review.user_detail.user_id) : undefined
   
    console.log(usersReview)

const handleDelete = () => {
        fetch(`/reviews/${usersReview.id}`, {
            method: "DELETE"
        })
        .then(r => {
            if (r.ok) {
                onDeleteReview(usersReview)
            }
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        const addReview = {review: updatedReview, rating: rating, title: title}
        fetch(`/reviews/${usersReview.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(addReview)
        })
        .then(r => r.json())
        .then(editReview)
    }

    const reviewList = product?.reviews.map((review) => 
    <ul className="listedReview" key={ review.id }>
        <h3>{review.title} - {review.rating} ⭐'s  </h3>
        <br />
        { review.review }
        <br />
        <br />
        by: {review.user_detail.username} {review.date}      
        <div className='updateForm'>
        {usersReview ? <React.Fragment>
            <button onClick={handleDelete}>Delete</button>
            <React.Fragment>
              {showForm ?  (
                <form onSubmit={handleUpdate}>
                <div>
                  <label>Title:</label>
                  <input 
                    type="text"
                    required 
                    ref={ref}
                    defaultValue={review.title}
                    onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                  <label>Review:</label>
                  <input 
                    type="text"
                    ref={ref}
                    defaultValue={review.review}
                    required 
                    onChange={(e) => setUpdatedReview(e.target.value)} />                  
                </div>
                <div>
                  <label>how many ⭐'s ?</label>
                  <select 
                    ref={ref}
                    defaultValue={review.rating}
                    onChange={(e) => setRating(e.target.value)}>
                    {numbersArray.map((num) => {
                      return <option key={num} value={num +1}> {num +1}</option>
                    })}
                    </select>
                </div>
                <button type="submit"> save review</button>
                <button onClick={() => setShowForm(false)}>cancel</button>
                <br />
                <br />
                <div>
                {errors.map((err) => (
                  <p key={err}>{err}</p>
                ))}
                </div>
                </form>
                ) : (
                <button onClick={() => setShowForm(true)}>Edit</button>
                )} 
            </React.Fragment>
            </React.Fragment> : (
                null
            )}  
            </div>
            <br />
        </ul>)

    return ( 
        <div>
        <NewReview product={product} addReview={addReview} user={user} reviews={reviews} setReviews={setReviews} />
        <ul>
        {reviewList} 
        </ul>
        </div>

       
     );
}
 
export default ListedReviews;

// usersReview.review_username === usersReview.user_detail.username
