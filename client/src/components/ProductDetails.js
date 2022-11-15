import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const ProductDetails = () => {
const {id} = useParams();
const [currentProduct, setCurrentProduct] = useState("");

    useEffect(() => {
        fetch(`/products/${id}`)
        .then((r) => r.json())
        .then((p) => {
            setCurrentProduct(p)
        });
    }, [id])

    return (  
        <div>
        <Product product={currentProduct} />
        </div>
    );
}
 
export default ProductDetails;