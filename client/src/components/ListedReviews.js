import React, {useState} from 'react';
import NewReview from './NewReview';


const ListedReviews = ({currentProduct, addReview, reviews, user, products, setReviews, onDeleteReview}) => {
    const [showForm, setShowForm] = useState(false)
    const [rating, setRating] = useState(0)
    const [title, setTitle] = useState("")
    const [updatedReview, setUpdatedReview] = useState("")
    const numbersArray = [...Array(5).keys()]
    const [errors, setErrors] = useState([]);


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
                    defaultValue={review.title}
                    onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                  <label>Review:</label>
                  <input 
                    type="text"
                    defaultValue={review.review}
                    required 
                    onChange={(e) => setUpdatedReview(e.target.value)} />                  
                </div>
                <div>
                  <label>how many ⭐'s ?</label>
                  <select 
                    defaultValue={review.rating}
                    onChange={(e) => setRating(e.target.value)}>
                    {numbersArray.map((num) => {
                      return <option key={num} value={num +1}> {num +1}</option>
                    })}
                    </select>
                </div>
                <button type="submit" > save review</button>
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
        <NewReview usersReview={usersReview} product={currentProduct} addReview={addReview} user={user} reviews={reviews} setReviews={setReviews} />
        <ul>
        {reviewList} 
        </ul>
        </div>

       
     );
}
 
export default ListedReviews;

// {user ? <React.Fragment>
//     <button>Delete</button>
//     <button>Edit</button>
// </React.Fragment> : (
//     null
// )}

