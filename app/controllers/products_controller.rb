class ProductsController < ApplicationController

    def index
        products = Product.all
        render json: products
    end

    def show
        product = Product.find(params[:id])
        render json: product
    end

    private

   def  product_params
    params.permit(:name, :description, :price, :category, :image_url)
   end
end
