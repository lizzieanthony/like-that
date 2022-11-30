import React, {useState} from 'react';


const NewReview = ({user}) => {
    const [showForm, setShowForm] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault()
    }
    
    return ( 
      <div className='newReview'>
      {user ? <React.Fragment> 
      <React.Fragment>
      { 
        showForm ?  (
        <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" placeholder="review title" />
        </div>
        <div>
          <label>Review:</label>
          <input type="text" placeholder="tell us what you think" />
        </div>
        <div>
          <label>Rating:</label>
          <input type="text" placeholder="rate the product out of 5" />
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