FactoryBot.define do
  factory :boat do
    name { 'My Boat' }
    model { 'Sailboat' }
    price { 25_000 }
    description { 'A nice boat!' }
    photo { 'boat.jpg' }
    user { association :user }
  end
end
