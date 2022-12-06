class ProductsController < ApplicationController
    before_action :authorize, only: :create

    def index
        products = Product.all
        render json: products
    end

    def create
        product = Product.create!(product_params)
        render json: product, status: :created 
    end

    def affordable
        affordable = Product.where("price <= ? ", params[:price])
        render json: affordable 
    end

    def priceRange
        binding.pry
        priceRange = Product.where("price >= ? AND price <= ?", params[:price], params[:price2])
        render json: priceRange.pluck(:price)
    end

    private

    def  product_params
        params.permit(:name, :description, :price, :image_url, :category)
    end

    def authorize 
        render json: { errors: ["Must be logged in to add a product!"] }, status: 401 unless session[:user_id]
    end

end
