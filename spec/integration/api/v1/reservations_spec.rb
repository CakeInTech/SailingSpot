require 'swagger_helper'

RSpec.describe 'SailingSpot API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  let(:user) { User.create(name: 'test') }
  let(:boat) { Boat.create(name: 'boat', description: 'New Description', model: 'hiSpeed', photo: 'new photo', price: 10.50, user_id: user.id) }
  
  path "/api/v1/users/{user_id}/reservations" do
    parameter name: :user_id, in: :path, type: :integer
    let(:user_id) { user.id }
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
          boat_id: { type: :integer },
        }
      }      
      let(:reservation) do
        {
          city: 'test reservation',
          pick_up: '2023-05-05',
          return_date: '2023-05-15',
          boat_id: boat[:id],
          user_id: user[:id],
        }
      end
      response '201', 'Created' do
        run_test!
      end
    end
  end

  path  "/api/v1/users/{user_id}/reservations/{id}" do
    parameter name: :user_id, in: :path, type: :integer
    parameter name: :id, in: :path, type: :integer
    let(:user_id) { user.id }

    let(:reserve) { Reservation.create(city: 'reservation', pick_up: '2023-05-05', return_date: '2023-05-15', boat_id: boat.id, user_id: user.id) }
    let(:id) { reserve.id }

    get 'Retrieve selected boat information' do
      tags 'reservation'
      produces 'application/json'
      response '200', 'OK' do
        run_test!
      end
    end
    
    put 'Update selected reservation information' do
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
          boat_id: { type: :integer },
        }
      }      
      let(:reservation) do
        {
          city: 'test reservation',
          pick_up: '2023-05-05',
          return_date: '2023-05-15',
          boat_id: boat[:id],
          user_id: user[:id],
        }
      end
      response '200', 'OK' do
        let(:id) { reserve.id }
        run_test!
      end
    end
    delete 'delete selected reservation information' do
      tags 'reservation'
      consumes 'application/json'
      produces 'application/json'
      response '200', 'OK' do
        let(:id) { reserve.id }
        run_test!
      end
    end
  end
end
