class Api::V1::AbilitiesController < ApplicationController
  def index
    if current_user
      # authorize! :read, :authorization
      # abilities = current_user.abilities
      render json: { abilities: current_user.ability }
    else
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end

  def authorized
    if current_user
      authorize! :perform_action, :resource_name

      render json: { message: 'Authorized' }
    else
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end
