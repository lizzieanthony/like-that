class ReviewsController < ApplicationController

    def index
        if params[:product_id]
            product = Product.find(params[:product_id])
            reviews = product.reviews
            render json: reviews
        elsif params[:user_id]
            user = User.find(params[:user_id])
            reviews = user.reviews
            render json: reviews 
        end
    end

    def create 
        review = current_user.reviews.create!(review_params)
        render json: review
    end

    def update
        review = current_user.reviews.find(params[:id])
        review.update!(review_params)
        render json: review
    end

    def destroy
        review = current_user.reviews.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:title, :review, :rating, :user_id, :product_id)
    end

end
