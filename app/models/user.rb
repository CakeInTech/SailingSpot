class User < ApplicationRecord
  has_many :boats
  has_many :reservations

  validates :name, presence: true
end
