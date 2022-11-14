class ProductsController < ApplicationController

    def index
        products = Product.all
        render json: products
    end

    def show
        product = Product.find(params[:id])
        render json: product
    end

#     def create 
#         product = Product.create!(product_params)
#         render json: product. status: :created 
#     end

#     private

#    def  product_params
#     params.permit(:name, :description, :price, :category, :image_url)
#    end
end
