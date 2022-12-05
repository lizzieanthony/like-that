class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :product_id, :title, :date, :user_detail 
  belongs_to :user
 
  def user_detail 
    {user_id: object.user.id, username: object.user.username }
  end

  def date
    object.created_at.strftime("%Y-%m-%d")
  end
end
