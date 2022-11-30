import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import NewReview from "./NewReview"
import ListedReviews from "./ListedReviews";

const ProductDetails = ({user}) => {

const {id} = useParams();
const [currentProduct, setCurrentProduct] = useState("");
const [reviews, setReviews] = useState([])
// const [user, setUser] = useState({});

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

    //   console.log(user)


    return (  
        <div>
        <Product product={currentProduct} />
        <br />
        <h3 className="reviewTitle">User Reviews: </h3>
        <NewReview product={currentProduct} addReview={addReview} user={user} />
        <ListedReviews reviews={reviews} user={user}  />       
        </div>
    );
}
 
export default ProductDetails;