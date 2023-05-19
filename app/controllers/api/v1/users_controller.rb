class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: JSON.pretty_generate({ users: @users.as_json }), status: :ok
  end
end
