require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :request do
  describe 'GET #index' do
    it 'returns a list of users' do
      User.create(name: 'Chimezie Asouzu', email: 'altontonnalumasa@gmail.com', password: '123456')
      get '/api/v1/users'
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['users'].first['name']).to eq('Chimezie Asouzu')
    end
  end
end
