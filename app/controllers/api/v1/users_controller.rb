class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: { users: @users }, status: :ok
  end
end
