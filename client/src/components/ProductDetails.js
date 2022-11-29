import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import NewReview from "./NewReview"
import ListedReviews from "./ListedReviews";

const ProductDetails = () => {

const {id} = useParams();
const [currentProduct, setCurrentProduct] = useState("");
const [reviews, setReviews] = useState([])
const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`/products/${id}`)
        .then((r) => r.json())
        .then((p) => {
            setCurrentProduct(p)
        });
        loadReviews();
    }, [id])

    console.log(currentProduct)

    const loadReviews = () => {
        fetch(`/products/${id}/reviews`)
        .then((r) => r.json())
        .then((reviews) => {
            setReviews(reviews)
        })
    }

    const addReview = (review) => {
        setReviews([...reviews, review])
      }

    return (  
        <div>
        <Product product={currentProduct} />
        <br />
        <NewReview product={currentProduct} addReview={addReview} user={user} />
        <br />
        <ListedReviews reviews={reviews} />       
        </div>
    );
}
 
export default ProductDetails;