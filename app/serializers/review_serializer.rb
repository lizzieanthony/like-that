class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :product_id, :title, :date, :user_detail, :review_username
  belongs_to :user
  belongs_to :product
 
  def user_detail 
    {user_id: object.user.id, username: object.user.username }
  end

  def date
    object.created_at.strftime("%Y-%m-%d")
  end
end
