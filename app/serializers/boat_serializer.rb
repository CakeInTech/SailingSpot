class BoatSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :photo, :price, :model, :availability
end
