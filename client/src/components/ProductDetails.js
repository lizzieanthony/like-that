import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const ProductDetails = () => {
const {productId} = useParams();
const [currentProduct, setCurrentProduct] = useState("");

    useEffect(() => {
        fetch(`/products/${productId}`)
        .then((r) => r.json())
        .then((p) => {
            setCurrentProduct(p)
        });
    }, [productId])

    return (  
        <div>
        <Product product={currentProduct} />
        </div>
    );
}
 
export default ProductDetails;