import React, {useState} from 'react';

const NewReview = ({product}) => {
    const [content, setContent] = useState("")
    return ( 
      <div className='newReview'>
      <br />
        <h3>User Reviews: </h3>
        <br />
          <form>
          <div>
            <label htmlFor="content">Content:</label>
          <input type="text" value={content} onChange={ (e) => setContent(e.target.value)} />
          </div>
           <input type="submit"value="Add Review" />
          </form>

      </div>
     );
}
 
export default NewReview;