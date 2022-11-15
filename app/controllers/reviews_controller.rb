class ReviewsController < ApplicationController

    def index
        if params[:product_id]
            product = Product.find(params[:product_id])
            reviews = product.reviews
            render json: reviews
        elsif params[user_id]
            user = User.find(params[user_id])
            reviews = user.reviews
            render json: reviews 
        end
end
