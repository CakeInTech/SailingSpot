class AuthorizationController < ApplicationController
  def index
    authorize! :read, :authorization

    render json: current_user.ability.attributes_for(:read)
  end
end
