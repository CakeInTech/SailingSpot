class Api::V1::ReservationsController < ApplicationController
  before_action :set_reservation, only: %i[show update]
  skip_before_action :verify_authenticity_token

  def index
    reservations = Reservation.all
    render json: { reservations: }, status: :ok
  end

  def show
    render json: { reservations: @reservation }, status: :ok
  end

  def new
    Reservation.new
  end

  def create
    reservation = Reservation.new(reservation_params)
    reservation.user_id = current_user.id

    if reservation.save
      render json: { message: 'Reservation created successfully!' }, status: :created
    else
      render json: { errors: reservation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @reservation.update(reservation_params)
      render json: { message: 'Updated' }, status: :ok
    else
      render json: { errors: @reservation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_reservation
    @reservation = Reservation.find(params[:id])
  end

  def reservation_params
    params.require(:reservation).permit(:city, :pick_up, :return_date, :boat_id, :user_id)
  end
end
