class Api::V1::ReservationsController < ApplicationController

  def index
    reservations = current_user.reservations.includes(:boat)
    reservation_array = reservations.map do |reservation|
      {
        id: reservation.id,
        pick_up: reservation.pick_up,
        return_date: reservation.return_date,
        boat_name: reservation.boat.name,
        boat_photo: reservation.boat.photo,
      }
    end
    render json: reservation_array, status: :ok
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

  private

  def reservation_params
    params.require(:reservation).permit(:city, :pick_up, :return_date, :boat_id)
  end
end