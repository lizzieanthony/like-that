class Product < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true, uniqueness: true
    validates :image_url, presence: true, uniqueness: true 
    validates :description, presence: true 
    validates :price, presence: true 
end
