class Api::V1::BoatsController < ApplicationController
  before_action :set_boat, only: %i[show update]

  def index
    boats = Boat.all
    render json: { boats: }, each_serializer: BoatSerializer, status: :ok
  end

  def show
    render json: @boat, serializer: BoatSerializer, status: :ok
  end

  def new
    Boat.new
  end

  def create
    boat = Boat.new(boat_params)

    if boat.save
      render json: { message: 'Boat created successfully!' }, status: :created
    else
      render json: { errors: boat.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @boat.update(boat_params)
      render json: { message: 'Updated' }, status: :ok
    else
      render json: { errors: @boat.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_boat
    @boat = Boat.find(params[:id])
  end

  def boat_params
    params.require(:boat).permit(:name, :description, :photo, :price, :model, :availability, :user_id)
  end
end
