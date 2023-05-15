# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    include CanCan::Ability

    def initialize(user)
      if user.role == 'admin'
        can :manage, :all
      else
        can :read, Boat
        can [:create, :update], Reservation
      end
    end
  end
end
