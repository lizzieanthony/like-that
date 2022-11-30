import React, {useState} from 'react';

const NewReview = ({product}) => {
    const [content, setContent] = useState("")
    return ( 
      <div className='newReview'>
      <br />
      <br />
      <br />
      <br />
        <h3>User Reviews: </h3>
           <input type="submit"value="Add Review" />
      </div>
     );
}
 
export default NewReview;

// <div>
//             <label htmlFor="content">Content:</label>
//           <input type="text" value={content} onChange={ (e) => setContent(e.target.value)} />
//           </div>