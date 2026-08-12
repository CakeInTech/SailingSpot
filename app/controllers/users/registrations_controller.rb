class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in @user
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
