class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating
  has_one :user
  has_one :produce
end
