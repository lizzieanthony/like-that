import React from "react";

const Product = ({product}) => {
    return (  
        <div className="product">{product.name} {product.description}</div>
    );
}
 
export default Product;