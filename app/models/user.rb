class User < ApplicationRecord
    has_many :reviews
    has_many :products, through: :reviews

    validates :username, presence: true, uniqueness: true

end
