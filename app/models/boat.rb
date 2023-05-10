class Boat < ApplicationRecord
  belongs_to :user
  has_many :reservations, dependent: :destroy

  validates :name, presence: true
  validates :model, presence: true
  validates :price, presence: true, numericality: { greater_than: 0 }
  validates :description, presence: true, length: { minimum: 10, maximum: 1000 }
  validates :photo, presence: true
end
