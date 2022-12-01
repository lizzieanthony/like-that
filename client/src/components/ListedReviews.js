import React, {useState} from 'react';


const ListedReviews = ({reviews, user, products, setReviews, onDeleteReview}) => {
    const [rateProduct, setRateProduct] = useState(0)
    const [newReview, setNewReview] = useState("")
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                  <label>Review:</label>
                  <input 
                    type="text"
                    required 
                    value={updatedReview}
                    onChange={(e) => setUpdatedReview(e.target.value)} />
                </div>
                <div>
                  <label>how many ⭐'s ?</label>
                  <select 
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}>
                    {numbersArray.map((num) => {
                      return <option key={num} value={num +1}> {num +1}</option>
                    })}
                    </select>
                </div>
                <button type="submit" onClick={handleUpdate}> save review</button>
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

