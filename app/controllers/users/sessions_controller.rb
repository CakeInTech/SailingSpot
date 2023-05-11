# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
    respond_to :json
  
    def create
      user = User.find_by(email: params[:email])
      if user && user.valid_password?(params[:password])
        sign_in user
        render json: user
      else
        render json: { error: 'Invalid email or password' }, status: :unprocessable_entity
      end
    end
  
    def destroy
      sign_out current_user
      render json: { message: 'Signed out successfully' }
    end
end
  