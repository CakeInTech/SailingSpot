Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api'
  mount Rswag::Api::Engine => '/api'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "root#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show] do
        resources :reservations, only: [:index]
      end
      resources :boats, only: [:index, :show]
    end
  end

  get '*path', to: 'root#index', via: :all
end
