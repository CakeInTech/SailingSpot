require 'swagger_helper'

RSpec.describe 'SailingSpot API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  path "/api/v1/users" do
    get 'Retrieve a list of all users' do
      tags 'user'
      produces 'application/json'
      response '200', 'OK' do
        run_test!
      end
    end
    post 'Create a new user' do
      tags 'user'
      consumes 'application/json'
      produces 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
        }
      }      
      let(:user) do
        {
          name: 'test user',
        }
      end
      response '201', 'Created' do
        run_test!
      end
    end
  end
end
