import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import ListedReviews from "./ListedReviews";

const ProductDetails = ({user, setUser, products}) => {

const {id} = useParams();
const [currentProduct, setCurrentProduct] = useState({reviews: []});
const [reviews, setReviews] = useState([])

    useEffect(() => {
        const singleProduct = products.find(obj => obj.id == id)
            setCurrentProduct(singleProduct)
            setReviews(currentProduct?.reviews)
        }, [products])

        console.log(currentProduct?.reviews)

    const addReview = (review) => {
        setReviews([...reviews, review])
      }

    const onDeleteReview = (newProductArray) => {
        setUser({...user, products: newProductArray})
    }

    return (  
        <div>
        <Product product={currentProduct}  />
        <br />
        <h3 className="reviewTitle">User Reviews: </h3>
        <ListedReviews reviews={currentProduct?.reviews} setReviews={setReviews} user={user} products={products} onDeleteReview={onDeleteReview} product={currentProduct} addReview={addReview} />  
        </div>
    );
}
 
export default ProductDetails;

