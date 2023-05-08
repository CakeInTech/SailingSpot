require 'rails_helper'

RSpec.describe 'Api::V1::Users', type: :request do
  describe 'GET /new' do
    it 'returns http success' do
      get '/api/v1/users/1/reservations'
      expect(response).to have_http_status(:success)
    end
  end
end
