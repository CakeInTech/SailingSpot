require 'rails_helper'

RSpec.describe Users::RegistrationsController, type: :request do
  describe 'POST #create' do
    context 'with valid params' do
      let(:valid_params) { { user: { name: 'John', email: 'john@example.com', password: 'password' } } }

      it 'creates a new user' do
        expect do
          post '/signup', params: valid_params, as: :json
        end.to change(User, :count).by(1)
        expect(response).to have_http_status(:created)
      end

      it 'returns the created user as JSON' do
        post '/signup', params: valid_params, as: :json
        expect(response.body).to eq(User.last.to_json)
      end
    end

    context 'with invalid params' do
      let(:invalid_params) { { user: { name: '', email: 'john@example.com', password: 'password' } } }

      it 'does not create a new user' do
        expect do
          post '/signup', params: invalid_params, as: :json
        end.not_to change(User, :count)
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it 'returns the errors as JSON' do
        post '/signup', params: invalid_params, as: :json
        expect(JSON.parse(response.body)).to eq({ 'errors' => { 'name' => ["can't be blank"] } })
      end
    end
  end
end
