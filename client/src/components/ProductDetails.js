import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import ListedReviews from "./ListedReviews";

const ProductDetails = ({user, setUser, products}) => {

const {id} = useParams();
const [currentProduct, setCurrentProduct] = useState({reviews: []});

    useEffect(() => {
        const singleProduct = products.find(obj => obj.id == id)
            setCurrentProduct(singleProduct)
        }, [products])

        console.log(currentProduct?.reviews)

    const addReview = (review) => {
        const updatedReviewsArray = [...currentProduct.reviews, review]
        const updatedProduct = {...currentProduct, reviews: updatedReviewsArray}
        const updatedProductCollection = products.map((product) => {
            if (currentProduct.id === product.id) {
                return updatedProduct;
            } else {
                return product
            }
        })
        setUser({...user, products: updatedProductCollection})
        setCurrentProduct(updatedProduct)
      }

      console.log(user)

      const editReview = (updatedReview) => {
        const updatedReviewCollection = currentProduct.reviews.map((review) => {
            if (review.id === updatedReview.id) {
                return updatedReview 
            } else {
                return review
            }
        })
        const updatedProduct = {...currentProduct, reviews: updatedReviewCollection}
        const updatedProductCollection = products.map((product) => {
            if (currentProduct.id === product.id) {
                return {...currentProduct, reviews: updatedReviewCollection};
            } else {
                return product
            }
        })
        setUser({...user, reviews: updatedProductCollection})
        setCurrentProduct(updatedProduct)
      }

      const onDeleteReview = (deleteReview) => {
        const updatedReviewCollection = currentProduct.reviews.filter(review=> review.id !== deleteReview.id) 
        const updatedProduct = {...currentProduct, reviews: updatedReviewCollection}
        setUser({...user, products: deleteReview})
        setCurrentProduct(updatedProduct)
    }

    // needs to know what review to delete in here. pass review to delete instead of new product array   


    return (  
        <div>
        <Product product={currentProduct}  />
        <br />
        <h3 className="reviewTitle">User Reviews: </h3>
        <ListedReviews onDeleteReview={onDeleteReview} reviews={currentProduct?.reviews} editReview={editReview} user={user} products={products} product={currentProduct} addReview={addReview} setUser={setUser} />  
        </div>
    );
}
 
export default ProductDetails;

