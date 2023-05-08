require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :request do
  describe 'GET #index' do
    it 'returns a list of users' do
      User.create(name: 'John')
      get '/api/v1/users'
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['users'].first['name']).to eq('John')
    end
  end
end
