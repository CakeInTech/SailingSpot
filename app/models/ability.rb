class Ability
  include CanCan::Ability

  def initialize(user)
    if user.role == 'admin'
      can :manage, :all
    else
      can :read, Boat, user_id
      can %i[create update], Reservation, user_id
    end
  end
end
