class AddAvailablityToBoats < ActiveRecord::Migration[7.0]
  def change
    add_column :boats, :availability, :boolean, default: true
  end
end
