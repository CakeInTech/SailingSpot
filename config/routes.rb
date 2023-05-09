Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "root#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
      resources :reservations, only: [:index]
      resources :boats, only: [:index, :show]
    end
  end
end
