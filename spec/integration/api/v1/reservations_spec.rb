require 'swagger_helper'

RSpec.describe 'SailingSpot API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  include Devise::Test::IntegrationHelpers

  let(:admin) { User.create(name: 'test', email: 'tst@gmail.com', password: 'password', role: 'admin') }
  let(:user) { User.create(name: 'test', email: 'test@gmail.com', password: 'password', role: 'user') }
  let(:boat) do
    Boat.create(name: 'boat', description: 'New Description Description',
                model: 'hiSpeed', photo: 'new photo', price: 10.50, user: admin)
  end

  before do
    user.save
    sign_in user
  end

  path '/api/v1/reservations' do
    get 'Retrieve a list of all reservations' do
      tags 'reservation'
      produces 'application/json'
      response '200', 'OK' do
        run_test!
      end
    end
    post 'Create a new reservation' do
      tags 'reservation'
      consumes 'application/json'
      produces 'application/json'
      parameter name: :reservation, in: :body, schema: {
        type: :object,
        properties: {
          city: { type: :string },
          pick_up: { type: :string, format: :date_time },
          return_date: { type: :string, format: :date_time },
          user_id: { type: :integer },
          boat_id: { type: :integer }
        }
      }
      let(:reservation) do
        {
          city: 'test reservation',
          pick_up: '2023-05-05',
          return_date: '2023-05-15',
          boat_id: boat[:id],
          user_id: user[:id]
        }
      end
      response '201', 'Created' do
        run_test!
      end
    end
  end
end
