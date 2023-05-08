class Api::V1::ReservationsController < ApplicationController
  def index
    @reservatons = Reservation.all
    render json: JSON.pretty_generate({ reservatons: @reservatons.as_json }), status: :ok
  end
end