class Api::V1::BoatsController < ApplicationController
  def index
    @boats = Boat.all
    render json: JSON.pretty_generate({ boats: @boats.as_json }), status: :ok
  end
end