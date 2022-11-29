class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :image_url
  has_many :users
  has_many :reviews
end
