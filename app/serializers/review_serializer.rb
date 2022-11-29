class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :user_id, :product_id, :title, :created_at
  has_one :user
  has_one :product
end
