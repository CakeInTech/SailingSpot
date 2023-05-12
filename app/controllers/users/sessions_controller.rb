class Users::SessionsController < Devise::SessionsController
  respond_to :json

  def create
    @user = User.find_by(email: params[:user][:email]) # find the user by email
    if @user && @user.valid_password?(params[:user][:password]) # use the nested `user` key to access the email and password parameters
      sign_in @user
      render json: @user
    else
      render json: { error: 'Invalid email or password' }, status: :unprocessable_entity
    end
  end

  def destroy
    sign_out current_user
    cookies.delete('remember_user_token')
    render json: { message: 'Signed out successfully' }
  end
end
