require 'swagger_helper'

RSpec.describe 'SailingSpot API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  let(:user) { User.create(name: 'test') }

  path "/api/v1/boats" do
    get 'Retrieve a list of all boats' do
      tags 'boat'
      produces 'application/json'
      response '200', 'OK' do
        run_test!
      end
    end
    post 'Create a new boat' do
      tags 'boat'
      consumes 'application/json'
      produces 'application/json'
      parameter name: :boat, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          description: { type: :string },
          model: { type: :string },
          photo: { type: :string },
          price: { type: :number },
          user_id: { type: :integer },
        }
      }      
      let(:boat) do
        {
          name: 'test boat',
          description: 'This is a new comment',
          model: 'hiSpeed',
          photo: 'new photo',
          price: 10.50,
          user_id: user[:id],
        }
      end
      response '201', 'Created' do
        run_test!
      end
    end
  end

  path  "/api/v1/boats/{id}" do
    parameter name: :id, in: :path, type: :integer
    let(:oldboat) { Boat.create(name: 'boat', description: 'New Description', model: 'hiSpeed', photo: 'new photo', price: 10.50, user_id: user.id) }
    let(:id) { oldboat.id }
    get 'Retrieve selected boat information' do
      tags 'boat'
      produces 'application/json'
      response '200', 'OK' do
        run_test!
      end
    end
    
    put 'Update selected boat information' do
      tags 'boat'
      consumes 'application/json'
      produces 'application/json'
      parameter name: :boat, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          description: { type: :string },
          model: { type: :string },
          photo: { type: :string },
          price: { type: :number },
          user_id: { type: :integer },
        }
      }      
      let(:boat) do
        {
          name: 'test boat',
          description: 'This is a new comment',
          model: 'hiSpeed',
          photo: 'new photo',
          price: 10.50,
          user_id: user[:id],
        }
      end
      response '200', 'OK' do
        let(:id) { oldboat.id }
        run_test!
      end
    end
    delete 'delete selected boat information' do
      tags 'boat'
      consumes 'application/json'
      produces 'application/json'
      response '200', 'OK' do
        let(:id) { oldboat.id }
        run_test!
      end
    end
  end
end
