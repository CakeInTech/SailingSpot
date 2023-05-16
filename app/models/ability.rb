# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    include CanCan::Ability

    def initialize(user)
      if user.role == 'admin'
        can :manage, :all
      else
        can :read, Boat, user_id
        can [:create, :update], Reservation, user_id
      end
    end
  end
end
