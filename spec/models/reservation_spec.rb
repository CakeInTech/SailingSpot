require 'rails_helper'

RSpec.describe Reservation, type: :model do
  context 'validations' do
    it 'requires city, pick_date and return_date to be present' do
      reservation = Reservation.new(city: nil, pick_up: nil, return_date: nil)
      expect(reservation).not_to be_valid
      expect(reservation.errors[:city]).to include("can't be blank")
      expect(reservation.errors[:pick_up]).to include("can't be blank")
      expect(reservation.errors[:return_date]).to include("can't be blank")
    end

    it 'requires return_date to be greater than pick_up' do
      reservation = Reservation.new(city: 'Nairobi', pick_up: '2023-04-18', return_date: '2023-04-16', user_id: 1,
                                    boat_id: 1)
      expect(reservation).not_to be_valid
      expect(reservation.errors[:return_date]).to include('must be greater than 2023-04-18')
    end
  end
end
