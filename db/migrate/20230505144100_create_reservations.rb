class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.string :city
      t.date :pick_up
      t.date :return_date
      t.references :user, null: false, foreign_key: true
      t.references :boat, null: false, foreign_key: true

      t.timestamps
    end
  end
end
