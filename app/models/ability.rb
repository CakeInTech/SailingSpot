class Ability
  include CanCan::Ability
  def initialize(user)
    if user.role == 'admin'
      can %i[read create update destroy], Boat, user_id: user.id
      can %i[read create update destroy], Reservation, user_id: user.id
    else
      can :read, Boat, user_id: user.id
      can %i[read create update], Reservation, user_id: user.id
    end
  end
end
