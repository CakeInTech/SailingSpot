class Api::V1::BoatsController < ApplicationController
  before_action :set_boat, only: %i[show update destroy]

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
    @boats = Boat.find(params[:id])

    if @boats.update(boat_params)
      render json: { message: 'Boat updated successfully' }, status: :ok
    else
      render json: @boats.errors_full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    if @boat.destroy
      render json: { message: 'Boat deleted successfully!' }, status: :ok
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
