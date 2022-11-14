class Review < ApplicationRecord
  belongs_to :user
  belongs_to :product

  validates :review, presence: true
  validates :rating, presence: true, length: { is: 1 }
end
