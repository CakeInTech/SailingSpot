Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "root#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show] do
        resources :boats, only: [:index, :show]
        resources :reservations, only: [:index]
      end
    end
  end
end
