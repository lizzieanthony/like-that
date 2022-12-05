import React from "react";
import {Link} from "react-router-dom";


const ProductList = ({products}) => {
    
    return (  
       <div>
       <br />
        {products.map((product) => (
            <div className="productpreview" key={product.id}>
            <Link to={`/products/${product.id}`}>
                <img src={product.image_url} alt="product"/> 
                <br/>
                <br/>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                </Link>
            </div>
        ))}
       </div>
    );
}
 
export default ProductList;