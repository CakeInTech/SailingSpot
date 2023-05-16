# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(name: "Beta User", email: "betauser@example.com", password: "123456")
# Create an array of sample names
names = %w[Alice Bob Charlie David Emily Frank Grace Hannah Isaac James]
reservations = %w[Nairobi 2023-04-14 2023-04-16]

# Loop through the names array and create a new user record for each name
names.each { |name| User.create(name: name) }
Reservation.create(city: 'Nairobi')
Reservation.create(pick_up: '2023-04-14')
Reservation.create(return_date: '2023-04-16')
Reservation.create(user_id: 1)
Reservation.create(user_id: 1)

boats = [
  {
    name: 'Sail Away',
    description: 'Spacious 30 foot catamaran',
    model: 'Sunreef 80',
    price: 250,
    photo: 'https://res.cloudinary.com/do4vatowz/image/upload/v1684164236/pngimg.com_-_boat_PNG36_o5nhnz.png',
    availability: true,
    user_id: 1
  },
  {
    name: 'High Seas 2',
    description: 'Luxury motor yacht',
    model: 'Prestige 650',
    price: 1200,
    photo: 'https://res.cloudinary.com/do4vatowz/image/upload/v1684164236/pngimg.com_-_boat_PNG36_o5nhnz.png',
    availability: true,
    user_id: 1
  },
  {
   name: 'Island Cat',
   description: '24 foot catamaran',
   model: 'Pattaras 240',
   price: 180,
   photo: 'https://res.cloudinary.com/do4vatowz/image/upload/v1684164236/pngimg.com_-_boat_PNG36_o5nhnz.png',
   availability: true,
   user_id: 1
  },
  {
    name: 'Eco Glide',
    description: 'Electric power boat',
    model: 'Duffy 28 EV',
    price: 320,
    photo: 'https://res.cloudinary.com/do4vatowz/image/upload/v1684164236/pngimg.com_-_boat_PNG36_o5nhnz.png',
    availability: true,
    user_id: 1
  },
  {
    name: 'Sea Legz II',
    description: '35 foot sailboat',
    model: 'Catalina 360',
    price: 520,
    photo: 'https://res.cloudinary.com/do4vatowz/image/upload/v1684164236/pngimg.com_-_boat_PNG36_o5nhnz.png',
    availability: false,
    user_id: 1
  }
]

boats.each do |boat|
  Boat.create!(boat)
end
