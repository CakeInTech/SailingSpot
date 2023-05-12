# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Create an array of sample names
names = %w[Alice Bob Charlie David Emily Frank Grace Hannah Isaac James]
reservations = %w[Nairobi 2023-04-14 2023-04-16]

# Loop through the names array and create a new user record for each name
names.each { |name| User.create(name: name) }
Reservation.create(city: 'Nairobi')
Reservation.create(pick_up: '2023-04-14')
Reservation.create(return_date: '2023-04-16')
Reservation.create(user_id: 1)
Reservation.create(boat_id: 1)
