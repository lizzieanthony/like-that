import React, {useState} from 'react';
import { useParams } from 'react-router-dom';


const NewReview = ({user}) => {
    const [showForm, setShowForm] = useState(false)
    const [product, setProduct] = useState({ reviews: [] })
    const [rating, setRating] = useState(0)
    const [title, setTitle] = useState("")
    const [review, setReview] = useState("")
    const { id } = useParams()
    const [newReview, setNewReview] = useState("")
    const {reviews, users, name, desctiption, image_url, price  } = product

   


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
          .then(NewReview => {
            setProduct({...product, reviews: [...reviews, newReview], users: [...users, newReview.user]})
          })
          setNewReview("")
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
          <label>Rating:</label>
          <input 
            type="text"
            required 
            value={rating}
            onChange={(e) => setRating(e.target.value)} />
        </div>
        <button type="submit"> post review</button>
        <button onClick={() => setShowForm(false)}>cancel</button>
        </form>
        ) : (<input onClick={() => setShowForm(true)} type="submit"value="Add Review" />
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