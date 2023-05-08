class Api::V1::BoatsController < ApplicationController
  def index
    @boats = Boat.all
    render json: { boats: @boats }, status: :ok
  end
end
