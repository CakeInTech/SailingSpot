require 'rails_helper'

RSpec.describe Users::SessionsController, type: :request do
  describe 'POST #create' do
    context 'with valid params' do
      let(:user) { create(:user) }
      let(:valid_params) { { user: { email: user.email, password: user.password } } }

      it 'signs in the user' do
        post '/signin', params: valid_params, as: :json
        expect(response).to have_http_status(:created)
      end

      it 'returns the signed in user as JSON' do
        post '/signin', params: valid_params, as: :json
        expect(response).to have_http_status(:created)
        expect(JSON.parse(response.body)).to eq(user.as_json)
      end
    end

    context 'with invalid params' do
      let(:invalid_params) { { user: { email: 'invalid@example.com', password: 'password' } } }

      it 'does not sign in the user' do
        post '/signin', params: invalid_params, as: :json
        expect(response).to have_http_status(:unauthorized)
        expect(response.headers['Authorization']).to be_blank
      end

      it 'returns an error message as JSON' do
        post '/signin', params: invalid_params, as: :json
        expect(response).to have_http_status(:unauthorized)
        expect(JSON.parse(response.body)).to eq({ 'error' => 'Invalid Email or password.' })
      end
    end
  end

  describe 'DELETE #destroy' do
    let(:user) { create(:user) }
    let(:valid_params) { { user: { email: user.email, password: user.password } } }

    it 'signs out the user' do
      post '/signin', params: valid_params, as: :json
      delete '/logout', as: :json
      expect(response).to have_http_status(:no_content)
      expect(response.headers['Authorization']).to be_blank
    end

    it 'deletes the remember_user_token cookie' do
      post '/signin', params: valid_params, as: :json
      delete '/logout', as: :json
      expect(response).to have_http_status(:no_content)
      expect(cookies['remember_user_token']).to be_nil
    end
  end
end
