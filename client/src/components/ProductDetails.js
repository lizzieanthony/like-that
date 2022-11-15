import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import NewReview from "./NewReview"

const ProductDetails = () => {

const {id} = useParams();
const [currentProduct, setCurrentProduct] = useState("");
const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`/products/${id}`)
        .then((r) => r.json())
        .then((p) => {
            setCurrentProduct(p)
        });
        loadReviews();
    }, [id])

    const loadReviews = () => {
        fetch(`/products/${id}/reviews`)
        .then((r) => r.json())
        .then((reviews) => {
            setReviews(reviews)
        })
    }

    return (  
        <div>
        <Product product={currentProduct} />
        <NewReview product={currentProduct} />
        </div>
    );
}
 
export default ProductDetails;