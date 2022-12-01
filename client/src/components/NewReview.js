import React, {useState} from 'react';
import { useParams } from 'react-router-dom';


const NewReview = ({user, reviews, setReviews}) => {
    const [showForm, setShowForm] = useState(false)
    // const [product, setProduct] = useState({ reviews: [], users: [] })
    const [rating, setRating] = useState(0)
    const [title, setTitle] = useState("")
    const [review, setReview] = useState("")
    const { id } = useParams()
    
    // const { users } = product
    const numbersArray = [...Array(5).keys()]


    const handleSubmitReview = (e) => {
      e.preventDefault()
      const addedReview = {review: review, rating: rating, title: title, product_id: id}
      fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(addedReview)
      })
      .then (r => {
        if (r.ok) {
          r.json()
          .then(newReview => {
            const updatedReviews = [...reviews, newReview]
            setReviews(updatedReviews)
          })
          
        }
      })
    }

    return ( 
      <div className='newReview'>
      {user ? <React.Fragment> 
      <React.Fragment>
      { 
        showForm ?  (
        <form onSubmit={handleSubmitReview}>
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
            value={review}
            onChange={(e) => setReview(e.target.value)} />
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
        <button onClick={handleSubmitReview}> post review</button>
        <button onClick={() => setShowForm(false)}>cancel</button>
        </form>
        ) : (<button onClick={() => setShowForm(true)} type="submit">Add Review </button>
    )}
      </React.Fragment>
      </React.Fragment> : (
        <React.Fragment>
        <button>login to review</button>
        </React.Fragment>
      )}      
      </div>
     );
}
 
export default NewReview;

// <div>
//             <label htmlFor="content">Content:</label>
//           <input type="text" value={content} onChange={ (e) => setContent(e.target.value)} />
//           </div>

// <label>Rating out of 5:</label>
// <input 
//   type="text"
//   required 
//   value={rating}
//   onChange={(e) => setRating(e.target.value)} />

// <input onClick={() => setShowForm(true)} type="submit"value="Add Review" />

// users: [...users, newReview.user]

// setProduct({...product, reviews: [...reviews, newReview], users: [...users, newReview.user]})