class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :boat

  validates :city, presence: true
  validates :pick_up, presence: true
  validates :return_date, presence: true
  validates_comparison_of :return_date, greater_than: :pick_up, other_than: Date.today
end
