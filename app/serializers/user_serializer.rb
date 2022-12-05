class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name
  has_many :products
  has_many :reviews, through: :users
end
