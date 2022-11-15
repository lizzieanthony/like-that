import React from "react";

const Product = ({product}) => {
    return (  
        <ul>
        <img src={product.image_url} className="productimage" alt="product"/>
            <div className="productDetails"> 
            <h1>{product.name}</h1>
            <br />
            <h3>{product.description}</h3>
            <br />
            <h4>{product.price}</h4>
            <br />
            <p>{product.link}Shop</p>
            </div>
        </ul>
        
    );
}
 
export default Product;