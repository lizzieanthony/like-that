class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :user_id, :product_id, :title, :date
  has_one :user
  has_one :product

  def date
    object.created_at.strftime("%Y-%m-%d")
  end
end
