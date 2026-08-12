# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Users
admin = User.create(name: 'Admin', email: 'admin@gmail.com', password: '123456', role: 'admin')
user = User.create(name: 'User', email: 'user@gmail.com', password: '123456', role: 'user')
# Boats
boat1 = Boat.create(name: 'Sail Away', description: 'Spacious 30 foot catamaran',  model: 'Sunreef 80', price: 250,
  photo: 'https://res.cloudinary.com/do4vatowz/image/upload/v1684164236/pngimg.com_-_boat_PNG36_o5nhnz.png',
  availability: true, user: admin)
boat2 = Boat.create(name: 'High Seas 2', description: 'Spacious 30 foot catamaran',  model: 'Prestige 180', price: 180,
  photo: 'https://res.cloudinary.com/do4vatowz/image/upload/v1684164236/pngimg.com_-_boat_PNG36_o5nhnz.png',
  availability: true, user: admin)
boat3 = Boat.create(name: 'Island Cat', description: 'Spacious 30 foot catamaran',  model: 'Sunreef 480', price: 210,
  photo: 'https://res.cloudinary.com/do4vatowz/image/upload/v1684164236/pngimg.com_-_boat_PNG36_o5nhnz.png',
  availability: true, user: admin)
# Reservations
Reservation.create(city: 'Nairobi', pick_up: '2023-04-14', return_date: '2023-04-16', user: user, boat: boat1)
Reservation.create(city: 'Nairobi', pick_up: '2023-04-14', return_date: '2023-04-16', user: user, boat: boat2)
